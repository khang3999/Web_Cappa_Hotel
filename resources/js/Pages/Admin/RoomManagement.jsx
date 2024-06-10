import NavbarAdmin from '@/Components/AdminPage/NavbarAdmin';
import { Head } from '@inertiajs/react';
import '../../admin.js';
import RoomContent from '@/Components/AdminPage/RoomContent.jsx';
export default function RoomAdmin({ auth, laravelVersion, phpVersion,rooms }) {
    return (
        <>
            <Head title="Management" />
            <NavbarAdmin></NavbarAdmin>
            <RoomContent rooms={rooms}></RoomContent> 
            
        </>
    );
}
