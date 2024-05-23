<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UtilityController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// API
Route::get('/api/banners/{type}',[BannerController::class,'getBannersByType'])->name('api.banners');
Route::get('/api/utilities/{type}',[UtilityController::class,'getUtilitiesByType'])->name('api.utilities');
Route::get('/api/rooms/{type}',[RoomController::class,'getRoomsByType'])->name('api.rooms');

// Tu viet
// Route::get('/',[HomeController::class, 'index'])->name('indexUser');
Route::get('/',function () {
    return Inertia::render('User/Home');
})->name('indexUser');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
