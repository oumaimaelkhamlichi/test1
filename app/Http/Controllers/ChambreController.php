<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SebastianBergmann\Environment\Console;

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
         return inertia('PagesAdmin/chambres/index', ['chambres' => $chambres]);
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
            'prix_chambre' => 'required|integer',
            'description_chambre' => 'required|string|max:2000',
            'image1' => 'required',
            'disponible' => 'nullable|boolean',
            'typeChambre' => 'nullable|in:standard,double,twin,luxe,familaile,executive,avecVue',
        ]);
        // $image = base64_encode(file_get_contents($request->file('image1')));
        if ($request->hasFile('image1')) {
            $file1 = $request->file('image1')->getClientOriginalName();
            $file_name1 = time() . '.' . $file1;
            $path = 'public/images';
            $request->file('image1')->move($path, $file_name1);
        }
        if ($request->hasFile('image2')) {
            $file2 = $request->file('image2')->getClientOriginalName();
            $file_name2 = time() . '.' . $file2;
            $path = 'public/images';
            $request->file('image2')->move($path, $file_name2);
        }
        if ($request->hasFile('image3')) {
            $file3 = $request->file('image3')->getClientOriginalName();
            $file_name3 = time() . '.' . $file3;
            $path = 'public/images';
            $request->file('image3')->move($path, $file_name3);
        }
        if ($request->hasFile('image4')) {
            $file4 = $request->file('image4')->getClientOriginalName();
            $file_name4 = time() . '.' . $file4;
            $path = 'public/images';
            $request->file('image4')->move($path, $file_name4);
        }
    
        $chambre = new Chambre();
        $chambre->numero = $request->numero;
        $chambre->numero = $request->numero;
        $chambre->nom_chambre = $request->nom_chambre;
        $chambre->prix_chambre = $request->prix_chambre;
        $chambre->nbr_per = $request->nbr_per;
        $chambre->description_chambre = $request->description_chambre;
        $chambre->disponible = $request->disponible ?? true;
        $chambre->typeChambre = $request->typeChambre ?? 'standard';
        $chambre->image1 = $file1  ?? '';
        $chambre->image2 = $file2  ?? '';
        $chambre->image3 = $file3  ?? '';
        $chambre->image4 = $file4  ?? '';

    
        $chambre->save();
        return redirect()->route('chambres.index');
    }
    /**9999999999999999999999999999999999999999
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
