import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import useDataStore from '../store/useDataStore'
import AreasAccesoCard from '../components/AreasAccesoCard'
import s from '../styles/ProfilePage.module.css'

const ProfilePage = () => {
    const { fetchAreasAcceso } = useDataStore()
    useEffect(() => {
        fetchAreasAcceso()
    },[fetchAreasAcceso])
    return (
        <div className={s.page}>
            <div className={s.left}>
                <UserCard />
                <AreasAccesoCard tipo="areasAccesoParcial" />
            </div>
            <AreasAccesoCard tipo='areasAcceso' />
        </div>
    )
}

export default ProfilePage