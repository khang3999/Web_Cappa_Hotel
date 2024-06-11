import NavbarAdmin from '@/Components/AdminPage/NavbarAdmin';
import { Head } from '@inertiajs/react';
import '../../admin.js';
import BookingContent from '@/Components/AdminPage/BookingContent.jsx';
export default function BookingAdmin({ auth, laravelVersion, phpVersion, bookings }) {
    console.log(bookings);
    return (
        <>
            <Head title="Management" />
            <NavbarAdmin></NavbarAdmin>
            <BookingContent bookings={bookings}></BookingContent>
            
        </>
    );
}
