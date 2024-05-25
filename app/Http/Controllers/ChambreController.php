<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use App\Models\TypeChambre;
use Illuminate\Http\Request;
use Inertia\Inertia;
use SebastianBergmann\Environment\Console;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Stichoza\GoogleTranslate\GoogleTranslate;

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
        $Type=TypeChambre::all();
        $chambres = Chambre::all();
         return inertia::render('PagesAdmin/Chambres/index', ['chambres' => $chambres,'types'=>$Type]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $typechambres = TypeChambre::all();
         return Inertia::render('PagesAdmin/Chambres/create', ['typechambres' => $typechambres]);
       
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
            // 'numero' => 'required|max:255',
            'nom_chambre' => 'required|string',
            'prix_chambre' => 'required|integer',
            'description_chambre' => 'required|string|max:2000',
            'image1' => 'required',
            'disponible' => 'nullable|boolean',
            // 'type_chambre_id' => 'nullable|in:standard,double,twin,luxe,familaile,executive,avecVue',
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
    
        $chambre->nom_chambre = $request->nom_chambre;
        $chambre->prix_chambre = $request->prix_chambre;
        $chambre->nbr_per = $request->nbr_per;
        $chambre->description_chambre = $request->description_chambre;
        $chambre->disponible = $request->disponible ?? true;
        $chambre->type_chambre_id = $request->type_chambre_id ?? 'standard';
        $chambre->image1 = $file1  ?? '';
        $chambre->image2 = $file2  ?? '';
        $chambre->image3 = $file3  ?? '';
        $chambre->image4 = $file4  ?? '';
        $tr = new GoogleTranslate();
    
        // Translate nom_chambre
        $chambre->translated_nom_chambre_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->nom_chambre);
        $chambre->translated_nom_chambre_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->nom_chambre);
        $chambre->translated_nom_chambre_es = $tr->setSource('auto')->setTarget('es')->translate($request->nom_chambre); 
    
        // Translate description_chambre
        $chambre->translated_description_chambre_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->description_chambre);
        $chambre->translated_description_chambre_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->description_chambre);
        $chambre->translated_description_chambre_es = $tr->setSource('auto')->setTarget('es')->translate($request->description_chambre);
    
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
    return Inertia::render('PagesAdmin/Chambres/Edit', ['chambre' => $chambre]);
}
public function getTranslations(Request $request)
{
    $textToTranslate = [
        'welcome' => 'Welcome to Cozy Suites',
        'perfect_getaway' => 'Your perfect getaway destination',
        'bookNow' => 'Book Now',
        'roomType' => 'Room Types',
        'Home'=>"Home",
       'Reservations'=>"Reservations",
        'Service'=>"Service",
        'Rooms'=>"Rooms",
        'login'=>"login",
       'signup'=>"sign up",
        'startDate' => ' Start Date',
       'endDate'=>'End Date',
        'personCount' =>'number of people',
        'roomList'=> ' list of rooms',
        'price' => 'price ',
       'description' => 'Description',
        'seeDetails' => 'view the details',
        'all' => 'All',
        'standard' => 'Standard',
       'double' =>'Double',
        'twin' =>'Twin',
        'luxe' => 'Luxe',
        'family' => 'Family',
        'executive' => 'Executive',
       'withView'=> 'with a view',
        // Add other text strings you want to translate
    ];

    $lang = $request->input('lang', 'en'); // Default language is English if not specified

    $translations = [];
    $translator = new GoogleTranslate();

    foreach ($textToTranslate as $key => $text) {
        $translatedText = $translator->setSource('auto')->setTarget($lang)->translate($text);
        $translations[$key] = $translatedText;
    }

    return response()->json(['translations' => $translations]);
}



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Chambre $chambre)
    {
        // $request->validate([
        //     'numero' => 'required|string|max:255',
        //     'nom_chambre' => 'required|string|max:255',
        //     'prix_chambre' => 'required|numeric',
        //     'nbr_per' => 'required|integer',
        //     'description_chambre' => 'required|string',
        //     'disponible' => 'boolean',
        //     'type_chambre_id' => 'required|integer',
        //     'image1' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image2' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image3' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        //     'image4' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);
    
        $chambre->numero = $request->numero;
        $chambre->nom_chambre = $request->nom_chambre;
        $chambre->prix_chambre = $request->prix_chambre;
        $chambre->nbr_per = $request->nbr_per;
        $chambre->description_chambre = $request->description_chambre;
        $chambre->disponible = $request->disponible ?? true;
        $chambre->type_chambre_id = $request->type_chambre_id;
    
        $images = ['image1', 'image2', 'image3', 'image4'];
    
        foreach ($images as $image) {
            if ($request->hasFile($image)) {
                $fileName = time() . '_' . $image . '.' . $request->file($image)->getClientOriginalExtension();
                $request->file($image)->move(public_path('images'), $fileName);
                $chambre->$image = $fileName;
            }
        }
    
        $chambre->save();
    
        return redirect()->route('chambres.index')->with('success', 'Chambre modifiée avec succès');
    }
    


    

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $chambre = Chambre::findOrFail($id);
        $chambre->delete();
    }
    
}
