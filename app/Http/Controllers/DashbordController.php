<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use App\Models\Comment;
use App\Models\Dashbord;
use App\Models\Reservation;
use App\Models\TypeChambre;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
class DashbordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()

    {
        $types=TypeChambre::all();
        $clients = User::all();
        $comment=Comment::all();
        $chambres = Chambre::all();
        $reservations = Reservation::with('chambre', 'user')->get();
        return inertia::render('Dashboard', ['types' => $types,'clients' => $clients,'comment' => $comment,'Chambres'=>$chambres,'reservations'=>$reservations]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Dashbord  $dashbord
     * @return \Illuminate\Http\Response
     */
    public function show(Dashbord $dashbord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Dashbord  $dashbord
     * @return \Illuminate\Http\Response
     */
    public function edit(Dashbord $dashbord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Dashbord  $dashbord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Dashbord $dashbord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Dashbord  $dashbord
     * @return \Illuminate\Http\Response
     */
    public function destroy(Dashbord $dashbord)
    {
        //
    }
}
