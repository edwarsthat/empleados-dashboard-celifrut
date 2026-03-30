import { useEffect } from 'react'
import NavBar from '../components/navBar'
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
            <NavBar />
            < UserCard />
            <AreasAccesoCard />
        </>
    )
}

export default ProfilePage