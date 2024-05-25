<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use App\Models\ChambreService;
use App\Models\TypeChambre;
use Illuminate\Http\Request;
use Inertia\Inertia;
class ChambreServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $serviceType=ChambreService::all();
        $typesChambres = TypeChambre::all();
        return inertia::render('MyPages/ServiceChambre/index', ['typesChambres' => $typesChambres,'serviceType'=>$serviceType]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
     
        // oumaima
        $typechambres=TypeChambre::all();
        $chambreService = ChambreService::all();
        return Inertia::render('MyPages/ServiceChambre/create',['chambreService' => $chambreService,'typechambres'=>$typechambres]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    // Valider les données du formulaire
     $request->validate([
        
        // 'id_chambre' => 'required',
        'type_chambre_id' => 'required',
        
        'vuePlage' => 'required',
        'wifi' => 'required',
        'nbrlit' => 'required',
        'ch_Rideaux' => 'boolean',
        'ch_climat' => 'boolean',
        'ch_menage' => 'boolean',
        'ch_bureaux' => 'boolean',
        'ch_armoire' => 'boolean',
        'ch_poubelle' => 'boolean',
        'ch_cuisine' => 'boolean',
        'nour_service' => 'boolean',
        'nour_eauMiniral' => 'boolean',
        'nour_ftour' => 'boolean',
        'nour_rda' => 'boolean',
        'nour_acha' => 'boolean',
        'bain_peignoire' => 'boolean',
        'bain_serviete' => 'boolean',
        'bain_douche' => 'boolean',
        'bain_articleToiette' => 'boolean',
        'bain_salleBainPrivee' => 'boolean',
        'bain_lavabo' => 'boolean',
        'telephone' => 'boolean',
        'tv' => 'boolean',
     ]);

    // Créer un nouvel objet ChambreService avec les données du formulaire
    $chambreService = new ChambreService();
    // $chambreService->id_chambre = $request->id_chambre;
    $chambreService->type_chambre_id = $request->type_chambre_id;
    // $chambreService->numero = $request->numero;
    $chambreService->vuePlage = $request->vuePlage;
    $chambreService->wifi = $request->wifi;
    $chambreService->nbrlit = $request->nbrlit;
    $chambreService->ch_Rideaux = $request->ch_Rideaux;
    $chambreService->ch_climat = $request->ch_climat;
    $chambreService->ch_menage = $request->ch_menage;
    $chambreService->ch_bureaux = $request->ch_bureaux;
    $chambreService->ch_armoire = $request->ch_armoire;
    $chambreService->ch_poubelle = $request->ch_poubelle;
    $chambreService->ch_cuisine = $request->ch_cuisine;
    $chambreService->nour_service = $request->nour_service;
    $chambreService->nour_eauMiniral = $request->nour_eauMiniral;
    $chambreService->nour_ftour = $request->nour_ftour;
    $chambreService->nour_rda = $request->nour_rda;
    $chambreService->nour_acha = $request->nour_acha;
    $chambreService->bain_peignoire = $request->bain_peignoire;
    $chambreService->bain_serviete = $request->bain_serviete;
    $chambreService->bain_douche = $request->bain_douche;
    $chambreService->bain_articleToiette = $request->bain_articleToiette;
    $chambreService->bain_salleBainPrivee = $request->bain_salleBainPrivee;
    $chambreService->bain_lavabo = $request->bain_lavabo;
    $chambreService->telephone = $request->telephone;
    $chambreService->tv = $request->tv;
    $existingService = ChambreService::where('type_chambre_id', $request->type_chambre_id)->first();
    if ($existingService) {
        return redirect()->back()->withErrors(['id_chambre' => 'Cette chambre a déjà des services.']);
    }

    // Enregistrez l'objet ChambreService dans la base de données
    $chambreService->save();
    return redirect()->route('serchambre.index');

    // Rediriger l'utilisateur vers une page de confirmation ou une autre page appropriée
    // return redirect()->route('chambre_services.index')->with('success', 'Le service de chambre a été ajouté avec succès.');
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ChambreService  $chambreService
     * @return \Illuminate\Http\Response
     */
    public function show(ChambreService $chambreService)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ChambreService  $chambreService
     * @return \Illuminate\Http\Response
     */
    public function edit(ChambreService $chambreService)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ChambreService  $chambreService
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $chambreService = ChambreService::findOrFail($id);

        // Liste de tous les champs booléens que vous souhaitez mettre à jour
        $booleanFields = [
            'vuePlage', 'wifi', 'ch_Rideaux', 'ch_climat', 'ch_menage', 'ch_bureaux', 'ch_armoire',
            'ch_poubelle', 'ch_cuisine', 'nour_service', 'nour_eauMiniral', 'nour_ftour', 'nour_rda', 'nour_acha',
            'bain_peignoire', 'bain_serviete', 'bain_douche', 'bain_articleToiette', 'bain_salleBainPrivee', 'bain_lavabo',
            'telephone', 'tv'
        ];

        $validatedData = $request->validate([
            'vuePlage' => 'boolean',
            'wifi' => 'boolean',
            'nbrlit' => 'integer',
            'ch_Rideaux' => 'boolean',
            'ch_climat' => 'boolean',
            'ch_menage' => 'boolean',
            'ch_bureaux' => 'boolean',
            'ch_armoire' => 'boolean',
            'ch_poubelle' => 'boolean',
            'ch_cuisine' => 'boolean',
            'nour_service' => 'boolean',
            'nour_eauMiniral' => 'boolean',
            'nour_ftour' => 'boolean',
            'nour_rda' => 'boolean',
            'nour_acha' => 'boolean',
            'bain_peignoire' => 'boolean',
            'bain_serviete' => 'boolean',
            'bain_douche' => 'boolean',
            'bain_articleToiette' => 'boolean',
            'bain_salleBainPrivee' => 'boolean',
            'bain_lavabo' => 'boolean',
            'telephone' => 'boolean',
            'tv' => 'boolean',
        ]);

        // Assurez-vous que les champs booléens non inclus dans la requête sont définis sur false
        foreach ($booleanFields as $field) {
            if (!isset($validatedData[$field])) {
                $validatedData[$field] = false;
            }
        }

        $chambreService->update($validatedData);

        return redirect()->route('serchambre.index')->with('success', 'Services de la chambre mis à jour avec succès');
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ChambreService  $chambreService
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = ChambreService::findOrFail($id);
        $service->delete();
    }
}
