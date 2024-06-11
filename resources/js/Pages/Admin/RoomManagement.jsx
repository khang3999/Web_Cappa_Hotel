import NavbarAdmin from '@/Components/AdminPage/NavbarAdmin';
import { Head } from '@inertiajs/react';
import '../../admin.js';
import RoomContent from '@/Components/AdminPage/RoomContent.jsx';
export default function RoomAdmin({ auth, laravelVersion, phpVersion,rooms,message }) {
    return (
        <>

            <Head title="Management" />
            <NavbarAdmin></NavbarAdmin>
            {message && (
                <div className="alert alert-info" role="alert">
                    {message}
                </div>
            )}
            <RoomContent rooms={rooms}></RoomContent>     
        </>
    );
}
