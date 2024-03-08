<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChambreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    //  $table->id();
    //  $table->integer('numero');
    //  $table->string('nom_chambre',100);           
    //  $table->integer('prix_chambre');
    //  $table->string('description_chambre');
    //  $table->string('image1');
    //  $table->string('image2')->nullable();
    //  $table->string('image3')->nullable();
    //  $table->string('image4')->nullable();
 
    //  $table->boolean('disponible')->default(true);
    //  $table->enum('typeChambre', ['standard', 'double','twin', 'luxe','familaile','executive','avecVue'])->default('standard');
    //  $table->timestamps();
    public function index()
    {
        $chambres = Chambre::all();
        return Inertia::render('PagesAdmin/chambres/index', ['chambres' => $chambres]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('PagesAdmin/chambres/create');
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
            'numero' => 'required|string|max:255',
            'nom_chambre' => 'required|string',
            'prix_chambre' => 'required|integer|max:255',
            'description_chambre' => 'required|string',
            'image1' => 'required|image|max:2048',
            'disponible' => 'nullable|boolean',
        'typeChambre' => 'nullable|in:standard,double,twin,luxe,familaile,executive,avecVue',
           
        ]);
        
        $chambre = new Chambre();
    $chambre->numero = $request->numero;
    $chambre->nom_chambre = $request->nom_chambre;
    $chambre->prix_chambre = $request->prix_chambre;
    $chambre->description_chambre = $request->description_chambre;
    $chambre->disponible = $request->disponible ?? true;
    $chambre->typeChambre = $request->typeChambre ?? 'standard';

    // Enregistrement de l'image
    if ($request->hasFile('image1')) {
        $imagePath = $request->file('image1')->store('chambre_images', 'public');
        $chambre->image1 = $imagePath;
    }

    $chambre->save();

    return redirect()->route('PagesAdmin.chambres.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $chambre = Chambre::findOrFail($id);
        return Inertia::render('PagesAdmin/chambres/show', ['chambre' => $chambre]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $chambre = Chambre::findOrFail($id);
        return Inertia::render('PagesAdmin/chambres/edit', ['chambre' => $chambre]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'numero' => 'required|integer',
            'nom_chambre' => 'required|string|max:100',
            'prix_chambre' => 'required|integer',
            'description_chambre' => 'required|string',
            'image1' => 'required|string|max:255',
            'image2' => 'nullable|string|max:255',
            'image3' => 'nullable|string|max:255',
            'image4' => 'nullable|string|max:255',
            'disponible' => 'nullable|boolean',
            'typeChambre' => 'nullable|in:standard,double,twin,luxe,familaile,executive,avecVue',
        ]);
        $chambre = Chambre::findOrFail($id);
        $chambre->numero = $request->numero;
        $chambre->nom_chambre = $request->nom_chambre;
        $chambre->prix_chambre = $request->prix_chambre;
        $chambre->description_chambre = $request->description_chambre;
        $chambre->disponible = $request->disponible;
        $chambre->typeChambre = $request->typeChambre;
        if ($request->has('image1')) {
            $chambre->image1 = $request->image1;
        }
        if ($request->has('image2')) {
            $chambre->image2 = $request->image2;
        }
        if ($request->has('image3')) {
            $chambre->image3 = $request->image3;
        }
        if ($request->has('image4')) {
            $chambre->image4 = $request->image4;
        }
    
        $chambre->save();
    
        return Inertia::location(route('chambres.index'));
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
