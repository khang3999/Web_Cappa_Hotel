<?php

namespace Database\Seeders;


use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        
        // BANNERS
        // 1.1 Home
        DB::table('banners')->insert(
            [
                'title'=>'Luxury Hotel & Best Resort',
                'description'=>'Enjoy a Luxury Experience',
                'photo'=>'banner-home-1.jpg'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'Unique Place to Relax & Enjoy',
                'description'=>'The Perfect Base For You',
                'photo'=>'banner-home-2.jpg',
                'type'=>'home'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'The Ultimate Luxury Experience',
                'description'=>'Enjoy The Best Moments of Life',
                'photo'=>'banner-home-3.jpg',
                'type'=>'home'
            ]
        );
    
        // 1.2 Restaurant
        DB::table('banners')->insert(
            [
                'title'=>'Banner restaurant 1',
                'description'=>'Enjoy a Luxury Experience',
                'photo'=>'banner-restaurant-1.jpg',
                'type'=>'restaurant'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'Banner restaurant 2',
                'description'=>'The Perfect Base For You',
                'photo'=>'banner-restaurant-2.jpg',
                'type'=>'restaurant'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'Banner restaurant 3',
                'description'=>'Enjoy The Best Moments of Life',
                'photo'=>'banner-restaurant-3.jpg',
                'type'=>'restaurant'
            ]
        );

        // 1.3 Spa and Wellness
        DB::table('banners')->insert(
            [
                'title'=>'Banner spa and wellness 1',
                'description'=>'Enjoy a Luxury Experience',
                'photo'=>'banner-spa-1.jpg',
                'type'=>'spa'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'Banner spa and wellness 2',
                'description'=>'The Perfect Base For You',
                'photo'=>'banner-spa-2.jpg',
                'type'=>'spa'
            ]
        );
        DB::table('banners')->insert(
            [
                'title'=>'Banner spa and wellness 3',
                'description'=>'Enjoy The Best Moments of Life',
                'photo'=>'banner-spa-3.jpg',
                'type'=>'spa'
            ]
        );
    }
}
