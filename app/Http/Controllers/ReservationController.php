<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use App\Models\Reservation;
use App\Models\TypeChambre;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
//     public function index()
//     {
//         $reservations =Reservation::all();
//         $chambre = $reservations->chambre;
//         $user = $reservations->user;
//         return Inertia::render('PagesAdmin/Reservation/Index', ['reservations' => $reservations,'chambre'=>$chambre, 'user'=> $user]);
       
// // Accéder aux données de l'utilisateur associé
                   
//     }
public function index()
{
    // Charger les relations chambre et user avec les réservations
    $reservations = Reservation::with('chambre', 'user')->get();
   
    // Passer les réservations à la vue
    return Inertia::render('PagesAdmin/Reservation/index', ['reservations' => $reservations]);
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
   
    {
        $user = Auth::user();
        $chambre=Chambre::all();
    
        return Inertia::render('PagesAdmin/Reservation/create', ['defaultUserId' => $user->id,'chambres'=>$chambre]);
        // return Inertia::render('PagesAdmin/Reservation/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'date_debut' => 'required|date',
        //     'date_fin' => 'required|date',
        //     'statu' => 'required|string',
        //     'date_reservation' => 'required|date',
        //     'nbr_personne' => 'required|integer',
        //     'nbr_children' => 'required|integer',
        //     'nbr_nuit' => 'required|integer|max:30',
        //     'id_chambre' => 'required|integer',
        //     'id_user' => 'required|integer',
        // ]);
    
        // $existingReservation = Reservation::where('id_chambre', $request->id_chambre)
        //     ->where(function($query) use ($request) {
        //         $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
        //               ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
        //               ->orWhere(function($query) use ($request) {
        //                   $query->where('date_debut', '<=', $request->date_debut)
        //                         ->where('date_fin', '>=', $request->date_fin);
        //               });
        //     })->first();
    
        // if ($existingReservation) {
        //     return response()->json(['message' => 'La chambre est déjà réservée pour cette période.'], 422);
        // }
    
        // $reservation = new Reservation();
        // $reservation->date_debut = $request->date_debut;
        // $reservation->date_fin = $request->date_fin;
        // $reservation->statu = $request->statu;
        // $reservation->date_reservation = $request->date_reservation;
        // $reservation->nbr_personne = $request->nbr_personne;
        // $reservation->nbr_children = $request->nbr_children;
        // $reservation->nbr_nuit = $request->nbr_nuit;
        // $reservation->id_chambre = $request->id_chambre;
        // $reservation->id_user = $request->id_user;
        // $reservation->save();
    
        // return redirect()->route('reservation.index');
        $validator = Validator::make($request->all(), [
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            'statu' => 'required|string',
            'date_reservation' => 'required|date',
            'nbr_personne' => 'required|integer',
            'nbr_children' => 'required|integer',
            'nbr_nuit' => 'required|integer|max:30',
            'id_chambre' => 'required|integer',
            
          
        ]);
    
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }
    
        $existingReservation = Reservation::where('id_chambre', $request->id_chambre)
            ->where(function($query) use ($request) {
                $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                      ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                      ->orWhere(function($query) use ($request) {
                          $query->where('date_debut', '<=', $request->date_debut)
                                ->where('date_fin', '>=', $request->date_fin);
                      });
            })->first();
    
        if ($existingReservation) {
            return back()->withErrors(['id_chambre' => 'La chambre est déjà réservée pour cette période.'])->withInput();
        }
    
        Reservation::create($request->all());
    
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
          $user = Auth::user();
         $chambre=Chambre::all();
        return Inertia::render('PagesAdmin/Reservation/edit', ['defaultUserId' => $user->id,'reservation' => $reservation,'chambres'=> $chambre]);

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
        $user = Auth::user();
        $reservation->update([
            'date_debut' => $request->date_debut,
            'date_fin' => $request->date_fin,
            'statu' => $request->statu,
            'date_reservation' => $request->date_reservation,
            'nbr_personne' => $request->nbr_personne,
            'nbr_children' => $request->nbr_children,
            'nbr_nuit' => $request->nbr_nuit,
            'id_chambre' => $request->id_chambre,
            'id_user' => $user->id,
        ]);
    
        // Redirect to the index route with a success message
        return redirect()->route('reservation.index')->with('success', 'Réservation mise à jour avec succès');
    }
    public function cancel($id)
    {
        $reservation = Reservation::findOrFail($id);
        $reservation->statu = 'annuler';
        $reservation->save();

        return response()->json(['message' => 'Réservation annulée avec succès']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        $reservation->delete();
    }
    public function create1()
    {
         $user = Auth::user();

        $typeChambres = TypeChambre::all();
        return Inertia::render('PageClient/Reservation/create1', [
            'typeChambres' => $typeChambres,
            'defaultUserId' => $user->id,
            // 'defaultUserId' => $user->id
]);
    }

    public function store1(Request $request)
    {
        $request->validate([
            'date_debut' => 'required|date',
            'date_fin' => 'required|date',
            'date_reservation' => 'required|date',
            'nbr_personne' => 'required|integer',
            'nbr_children' => 'required|integer',
            'nbr_nuit' => 'required|integer',
            'type_chambre_id' => 'required|string',
            'id_user' => 'required|integer',
        ]);
    
        $chambre = Chambre::where('type_chambre_id', $request->type_chambre_id)
            ->where('disponible', true)
            ->whereDoesntHave('reservations', function ($query) use ($request) {
                $query->where(function ($query) use ($request) {
                    $query->whereBetween('date_debut', [$request->date_debut, $request->date_fin])
                          ->orWhereBetween('date_fin', [$request->date_debut, $request->date_fin])
                          ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_debut])
                          ->orWhereRaw('? BETWEEN date_debut AND date_fin', [$request->date_fin]);
                });
            })->first();
    
        if (!$chambre) {
        return back()->withErrors(['error' => 'La chambre est déjà réservée pour cette période.'])->withInput();

            // return redirect()->route('reservation.error')->with('error', 'No available room of this type for the selected dates.');
        }
    
        $reservation = new Reservation();
        $reservation->date_debut = $request->date_debut;
        $reservation->date_fin = $request->date_fin;
        $reservation->date_reservation = $request->date_reservation;
        $reservation->nbr_personne = $request->nbr_personne;
        $reservation->nbr_children = $request->nbr_children;
        $reservation->nbr_nuit = $request->nbr_nuit;
        $reservation->id_user = $request->id_user;
        $reservation->type_chambre_id = $request->type_chambre_id;
      
        // ici
        $reservation->id_chambre = $chambre->id;
        
        $reservation->save();
    
        $chambre->disponible = false;
        
        $chambre->save();
        return response()->json([
            'status' => 'success',
            'message' => 'La chambre est disponible pour cette période.',
            'data' => [
                'chambre_numero' => $chambre->numero,
                'description' => $chambre->description_chambre,
                'prix_total' => $chambre->prix_chambre * $reservation->nbr_nuit,
            ]
        ]);
        
    }
}
