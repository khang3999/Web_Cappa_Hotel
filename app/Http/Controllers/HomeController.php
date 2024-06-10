<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    function getRoomsBySearch(Request $request) {
        $request->validate([
            'checkin' => 'required',
            'checkout' => 'required'
        ]);

        $checkin = $request->checkin;
        $checkout = $request->checkout;
        
        $roomsLarge = Room::where('type','large')->get();
        $roomsStandard = Room::where('type','standard')->get();
        return Inertia::render('User/RoomSearch',['roomsLarge'=>$roomsLarge,'roomsStandard'=>$roomsStandard]);
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
