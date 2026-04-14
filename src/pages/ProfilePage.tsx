import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import useDataStore from '../store/useDataStore'
import AreasAccesoCard from '../components/AreasAccesoCard'

const ProfilePage = () => {
    const { fetchAreas } = useDataStore()
    useEffect(() => { 
        fetchAreas()
    },[fetchAreas])
    return (
        <>
            <UserCard />
            <AreasAccesoCard />
        </>
    )
}

export default ProfilePage