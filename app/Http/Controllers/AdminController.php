<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{

    // Go to Admin
    public function indexAdmin()
    {
        return Inertia::render('Admin/BookingManagement');
    }
    // Go to room management
    public function roomsManagement()
    {
        return Inertia::render('Admin/RoomManagement');
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
