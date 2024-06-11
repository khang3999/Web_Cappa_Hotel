<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminController extends Controller
{

    public function getAllBooking(Request $request)
    {
        $id = $request->id;
        $booking = Booking::find($id);
        $booking->status = 1;
        $booking->save();
        $bookings = Booking::all();
        return response()->json(['bookings'=>$bookings,'status'=>'true']);
    }
    // Go to Admin
    public function indexAdmin()
    {
        // $bookings = Booking::orderBy('status', 'asc')->get();
        $bookings = DB::table('bookings')->join('rooms', 'bookings.id_room','=','rooms.id')->select('bookings.*', 'rooms.name')->get();
        // dd($bookings);
        return Inertia::render('Admin/BookingManagement',['bookings'=>$bookings]);
    }
    // Go to room management
    public function roomsManagement()
    {
        $rooms = Room::limit(4)->get();
        return Inertia::render('Admin/RoomManagement',['rooms' => $rooms]);
    }
    
    public function accountsManagement()
    {
        return Inertia::render('Admin/AccountManagement');
    }
    
    public function statusesManagement()
    {
        return Inertia::render('Admin/StatusManagement');
    }
    
    public function servicesManagement()
    {
        return Inertia::render('Admin/ServiceManagement');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $room = Room::find($id);
        return Inertia::render('Admin/RoomEdit',['room'=>$room]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

}
