<?php

namespace App\Http\Controllers;
use App\Models\clients;
use App\Models\Reservation;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class Dashboard extends Controller
{
    // public function Dashbord()
    // {  
    //     $clients = User::all();
    //     $comment=Comment::all();
    //     $reservations = Reservation::with('chambre', 'user')->get();
    //     return Inertia::render('Dashboard', ['clients' => $clients,'comment' => $comment,'reservations' => $reservations,'nom'=>'oumaima']);
    // }
}
