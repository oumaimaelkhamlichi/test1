<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reservations =Reservation::all();
        return Inertia::render('PagesAdmin/Reservation/Index', ['chambres' => $reservations]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('PagesAdmin/Reservation/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'date_debut' => 'required|string|max:255',
            'date_fin' => 'required|date',
            'statu' => 'required|string',
            'etoile' => 'required|string|max:5',
            'date-reservation' => 'required|date',
            'nbr_personne' => 'required|integer',
            'nbr_children' => 'required|integer',
            'nbr_nuit' => 'required|string|max:30',
            'numero_chambre' => 'required|string',
            'id_chambre' => 'required|integer',
            'id_user' => 'required|integer',
        ]);
        $reservation = new Reservation();
        $reservation->date_debut= $request->date_debut;
        $reservation->date_fin = $request->date_fin;
        $reservation->statu = $request->statu;
        $reservation->etoile= $request->etoile;
        $reservation->date_reservation= $request->date_reservation;
        $reservation->nbr_personne= $request->nbr_personne;
        $reservation->nbr_children= $request->nbr_children;
        $reservation->nbr_nuit= $request->nbr_nuit;
        $reservation->numero_chambre= $request->numero_chambre;
        $reservation->id_chambre= $request->id_chambre;
        $reservation->id_user= $request->id_user;
        $reservation->save();
        return redirect()->route('reservation.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
