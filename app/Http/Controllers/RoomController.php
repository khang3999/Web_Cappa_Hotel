<?php

namespace App\Http\Controllers;

use App\Models\Room;
use App\Models\Utility;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Intervention\Image;
use Illuminate\Support\Facades\Storage;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getRoomsByType(String $type)
    {
        $limit = ($type == "standard" ? 3 : 2);
        $rooms = Room::where('type', $type)->limit($limit)->get();
        return response()->json($rooms);
    }
    public function index()
    {
        //
        $rooms = Room::all();
        return Inertia::render('Admin/RoomManagement', ['rooms' => $rooms]);
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
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'adult' => 'required|numeric',
            'children' => 'required|numeric',
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Kiểm tra định dạng và kích thước ảnh
            'type' => 'required',
        ]);

        // Lưu vào cơ sở dữ liệu
        $room = new Room();
        $room->name = $request->name;
        $room->description = $request->description;
        $room->price = $request->price;
        $room->adult = $request->adult;
        $room->children = $request->children;
        $room->type = $request->type;
        // Lưu ảnh vào thư mục và lưu đường dẫn vào cơ sở dữ liệu
        $imagePath = $request->file('photo')->store('images', 'public');
        $room->photo = $imagePath;
        $room->save();
        return redirect()->route("booking.admin");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $room = Room::find($id);
        return Inertia::render('User/RoomDetail', ['room' => $room]);   
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
