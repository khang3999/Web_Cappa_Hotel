<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BannerController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UtilityController;
use App\Http\Middleware\CheckUserRole;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

// API
Route::get('/api/banners/{type}',[BannerController::class,'getBannersByType'])->name('api.banners');
Route::get('/api/utilities/{type}',[UtilityController::class,'getUtilitiesByType'])->name('api.utilities');
Route::get('/api/rooms/{type}',[RoomController::class,'getRoomsByType'])->name('api.rooms');
Route::post('/api/bookings/all',[AdminController::class,'getAllBooking'])->name('api.booking.all');

// Tu viet
// Route::get('/',[HomeController::class, 'index'])->name('indexUser');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('User/Home');
    })->name('indexUser');
    Route::get('/about', function () {
        return Inertia::render('User/AboutUs');
    })->name('aboutUsUser');
    //declare route for restaurant ui
    Route::get('/restaurant', function () {
        return Inertia::render('User/Restaurant');
    })->name('restaurant');
    //declare route for contact ui
    Route::get('/contact', function () {
        return Inertia::render('User/Contact');
    })->name('contact');
});

Route::get('/about',function () {
    return Inertia::render('User/AboutUs');
})->name('aboutUsUser');
Route::post('/roomsearch',[HomeController::class,'getRoomsBySearch'])->name('roomsearch');
Route::post('/booking',[HomeController::class,'checkRoom'])->name('checkRoomAndSave');


Route::get('/detail/{roomId}',[RoomController::class,'show'])->name('room.detail');
Route::get('/payment',[RoomController::class,'payment'])->name('room.payment');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Login truoc khi vao admin
// Khi nao xac  thuc thi thêm midleware vào sau prefix()
Route::prefix('admin')->middleware(['auth','verified',CheckUserRole::class])->group(function () {
    Route::get("/", [AdminController::class, "indexAdmin"])->name('booking.admin');
    Route::get("/accounts", [AdminController::class, "accountsManagement"])->name('accounts.admin');
    Route::get("/statuses", [AdminController::class, "statusesManagement"])->name('statuses.admin');
    Route::get("/services", [AdminController::class, "servicesManagement"])->name('services.admin');  
    Route::get("/rooms",[RoomController::class,'index'])->name('admin.rooms.index');
    Route::get("/rooms/create",function () {
        return Inertia::render('Admin/RoomCreate');
    })->name('admin.rooms.create');
    Route::post("/rooms/store",[RoomController::class,'store'])->name('admin.rooms.store');
    Route::get("/rooms/edit/{roomId}",[AdminController::class,'edit'])->name('admin.rooms.edit');
    Route::post("/rooms/update",[RoomController::class,'update'])->name('admin.rooms.update');
    Route::get("/rooms/edit/{roomId}",[AdminController::class,'edit'])->name('admin.rooms.edit');
    Route::get("/rooms/delete/{roomid}",[RoomController::class,'destroy'])->name('admin.rooms.destroy');
});

// Image
Route::get('/images/{filename}', function ($filename) {
    $path = storage_path('app/public/images/' . $filename);
    if (!file_exists($path)) {
        abort(404);
    }
    return response()->file($path);
})->name('image');

//  <img src={`/images/${imageUrl}`} alt="Room Image" /> Hiển thị
//declare route for restaurant ui
Route::get('/restaurant', function () {
    return Inertia::render('User/Restaurant');
})->name('restaurant');
//declare route for contact ui
Route::get('/contact', function () {
    return Inertia::render('User/Contact');
})->name('contact');
//Comment
Route::post('/comments', [CommentController::class,"store"])->name("comment.store");
require __DIR__.'/auth.php';
