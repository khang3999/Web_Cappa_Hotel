<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Booking;
use App\Models\Room;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    function getRoomsBySearch(Request $request)
    {
        $request->validate([
            'checkin' => 'required',
            'checkout' => 'required'
        ]);

        $checkin = $request->checkin;
        $checkout = $request->checkout;
        $roomsId = Room::pluck('id');
        // dd($roomsId);

        $roomsIdFree = [];

        $a = 0;
        for ($i = 0; $i < count($roomsId); $i++) {
            $bookingByRoomId = Booking::where('id_room', $roomsId[$i])->select('checkin', 'checkout')->get();
            $isDateInBooking = false;
            foreach ($bookingByRoomId as $booking) {
                if (($booking->checkin <= $checkin && $booking->checkout >= $checkin) ||        ($booking->checkin <= $checkout && $booking->checkout >= $checkout)) {
                    $isDateInBooking = true;
                    break;
                }
            }
            if ($isDateInBooking == false) {
                $roomsIdFree[$a++] = $roomsId[$i];
            }
        }

        $roomsLarge =  Room::whereIn('id', $roomsIdFree)
            ->where('type', 'large')
            ->get();
        $roomsStandard = Room::whereIn('id', $roomsIdFree)
            ->where('type', 'standard')
            ->get();
        return Inertia::render('User/RoomSearch', ['roomsLarge' => $roomsLarge, 'roomsStandard' => $roomsStandard]);
    }
    function checkRoom(Request $request)
    {
        $request->validate([
            'checkin' => 'required',
            'checkout' => 'required'
        ]);
        $roomId = $request->roomId;
        $checkin = $request->checkin;
        $checkout = $request->checkout;
        $bookingByRoomId = Booking::where('id_room', $roomId)->select('checkin', 'checkout')->get();
        $isDateInBooking = false;
        foreach ($bookingByRoomId as $booking) {
            if (($booking->checkin <= $checkin && $booking->checkout >= $checkin) ||        ($booking->checkin <= $checkout && $booking->checkout >= $checkout)) {
                $isDateInBooking = true;
                break;
            }
        }
        if ($isDateInBooking == true) {
            // tra ve lai trang detail voi message date unavaiable
            return redirect()->route('room.detail', $roomId)->with('message', "Date invalid!");
        } else {
            $booking = new Booking();
            $cusId = $request->userId;
            $booking->id_customer = $cusId;
            $booking->id_room = $roomId;
            $booking->checkin = $checkin;
            $booking->checkout = $checkout;
            $checkin = Carbon::parse($booking->checkin); // Chuyển đổi chuỗi checkin thành đối tượng Carbon
            $checkout = Carbon::parse($booking->checkout);
            $numberOfDays = $checkout->diffInDays($checkin);
            
            $booking->price = ($request->price) * $numberOfDays;
            $booking->save();
            return redirect()->route('indexUser');
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $banners = Banner::where('type','home')->get();    
        // return Inertia::render('User/Home',['banners'=>$banners]);
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
