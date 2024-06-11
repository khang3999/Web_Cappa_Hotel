import NavbarAdmin from '@/Components/AdminPage/NavbarAdmin';
import { Head } from '@inertiajs/react';
import '../../admin.js';
import RoomCreateContent from './RoomCreateContent.jsx';
export default function RoomCreate({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Create form" />
            <NavbarAdmin></NavbarAdmin>
            <RoomCreateContent></RoomCreateContent>        
        </>
    );
}
