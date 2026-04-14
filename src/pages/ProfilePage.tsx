import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import useDataStore from '../store/useDataStore'
import AreasAccesoCard from '../components/AreasAccesoCard'

const ProfilePage = () => {
    const { fetchAreasAcceso } = useDataStore()
    useEffect(() => { 
        fetchAreasAcceso()
    },[fetchAreasAcceso])
    return (
        <>
            <UserCard />
            <AreasAccesoCard />
        </>
    )
}

export default ProfilePage