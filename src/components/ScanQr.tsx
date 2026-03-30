import { useEffect, useRef, useCallback, useState } from 'react'
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode'
import { useCameraScanStore } from '../store/useCameraScanStore'

export default function ScanQr() {
  const isOpen      = useCameraScanStore(state => state.isOpen)
  const QrScan      = useCameraScanStore(state => state.QrScan)
  const BarCodeScan = useCameraScanStore(state => state.BarCodeScan)
  const close       = useCameraScanStore(state => state.close)
  const setResult   = useCameraScanStore(state => state.setResult)

  const dialogRef    = useRef<HTMLDialogElement>(null)
  const scannerRef   = useRef<Html5Qrcode | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isScanning   = useRef(false)
  const [error, setError] = useState<string | null>(null)

  // Abre/cierra el dialog de forma imperativa — React nunca toca el atributo open
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  const stopScanner = useCallback(async () => {
    if (!scannerRef.current || !isScanning.current) return
    isScanning.current = false
    try {
      await scannerRef.current.stop()
      scannerRef.current.clear()
    } catch (err) {
      console.error('Error al detener el escáner:', err)
    }
    scannerRef.current = null
  }, [])

  const startScanner = useCallback(async () => {
    if (!containerRef.current || isScanning.current) return
    setError(null)

    const scannerId = 'qr-scanner-container'
    containerRef.current.id = scannerId

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const scanner = new (Html5Qrcode as any)(scannerId, {
        formatsToSupport: BarCodeScan
          ? [
              Html5QrcodeSupportedFormats.PDF_417,
              Html5QrcodeSupportedFormats.CODE_128,
              Html5QrcodeSupportedFormats.CODE_39,
            ]
          : [Html5QrcodeSupportedFormats.QR_CODE],
      })
      scannerRef.current = scanner
      isScanning.current = true

      const config: Parameters<Html5Qrcode['start']>[1] = {
        fps: BarCodeScan ? 10 : 15,
        qrbox: BarCodeScan ? { width: 500, height: 200 } : { width: 250, height: 250 },
        ...(BarCodeScan && {
          videoConstraints: { width: { ideal: 1920 }, height: { ideal: 1080 } },
        }),
      }

      await scannerRef.current!.start(
        { facingMode: 'environment' },
        config,
        async (decodedText) => {
          await stopScanner()
          setResult(decodedText)
        },
        () => { /* silencioso */ }
      )
    } catch (err) {
      isScanning.current = false
      scannerRef.current = null
      setError('No se pudo acceder a la cámara. Verifica los permisos.')
      console.error('Error al iniciar el escáner:', err)
    }
  }, [BarCodeScan, stopScanner, setResult])

  useEffect(() => {
    if (!isOpen) {
      stopScanner()
      return
    }
    const timer = setTimeout(() => startScanner(), 150)
    return () => clearTimeout(timer)
  }, [isOpen, startScanner, stopScanner])

  const handleClose = useCallback(async () => {
    await stopScanner()
    setError(null)
    close()
  }, [stopScanner, close])

  // Click en el backdrop del dialog nativo => cerrar
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <dialog ref={dialogRef} className="scanqr-dialog" onClick={handleDialogClick}>
      <div className="scanqr-header">
        <h3 className="scanqr-title">
          {QrScan ? 'Escaneo QR' : 'Código de Barras'}
        </h3>
        <button className="scanqr-close" aria-label="Cerrar" onClick={handleClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="scanqr-body">
        {error ? (
          <div className="scanqr-error">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              className="scanqr-error-icon">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>{error}</p>
            <button className="scanqr-retry" onClick={startScanner}>
              Reintentar
            </button>
          </div>
        ) : (
          <div className="scanqr-video-wrapper">
            <div ref={containerRef} className="scanqr-container" />
            {BarCodeScan && <div className="scanqr-barcode-line" />}
          </div>
        )}
      </div>

      <p className="scanqr-hint">
        {QrScan
          ? 'Apunta la cámara al código QR'
          : 'Centra el código de barras en el recuadro'}
      </p>

    </dialog>
  )
}
