<?php
namespace App\Http\Controllers;

use App\Models\TypeChambre;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Stichoza\GoogleTranslate\GoogleTranslate;
use App\Models\Chambre;

class TypeChambreController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $typechambres = TypeChambre::all();
        return inertia('PagesAdmin/TypeChambres/index', ['typechambres' => $typechambres]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
        return Inertia::render('PagesAdmin/TypeChambres/create');
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
        'prix_par_nuit' => 'required|integer',
        'description' => 'required|string',
        'image1' => 'nullable|file|image',
        'image2' => 'nullable|file|image',
        'image3' => 'nullable|file|image',
        'image4' => 'nullable|file|image',
        'typeChambre' => 'required|string|in:Chambre standard,Chambre double,Chambre twin,Suite,Chambre familiale,Chambre avec vue,Chambre de luxe,Chambre exécutive',
    ]);

    // Upload images
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


    $typechambre = new TypeChambre();
    $typechambre->prix_par_nuit = $request->prix_par_nuit;
    $typechambre->description = $request->description;
    $typechambre->typeChambre = $request->typeChambre;
    $typechambre->image1 = $file1;
    $typechambre->image2 = $file2;
    $typechambre->image3 = $file3;
    $typechambre->image4 = $file4;

    // Initialize Google Translate
    try {
        $tr = new GoogleTranslate();

        // Translate typeChambre
        $typechambre->translated_type_chambre_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->typeChambre);
        $typechambre->translated_type_chambre_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->typeChambre);
        $typechambre->translated_type_chambre_es = $tr->setSource('auto')->setTarget('es')->translate($request->typeChambre);
        $typechambre->translated_type_chambre_en = $tr->setSource('auto')->setTarget('en')->translate($request->typeChambre);

        // Translate description
        $typechambre->translated_description_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->description);
        $typechambre->translated_description_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->description);
        $typechambre->translated_description_es = $tr->setSource('auto')->setTarget('es')->translate($request->description);
        $typechambre->translated_description_en = $tr->setSource('auto')->setTarget('en')->translate($request->description);
    } catch (\Exception $e) {
        Log::error('Google Translate Error: ' . $e->getMessage());
        return redirect()->back()->withErrors(['error' => 'Translation service is currently unavailable.']);
    }

    $typechambre->save();

    return redirect()->route('typechambres.index');
}

private function uploadImage($image)
{
    if ($image) {
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('image'), $imageName);
        return $imageName;
    }
    return null;
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $typechambre = TypeChambre::findOrFail($id);
        $chambreServs = $typechambre->chambreServs; // Retrieve associated services
        
        // Pass the room type and its services to the view
        return Inertia::render('PageClient/show', [
            'typechambre' => $typechambre,
            'chambreServs' => $chambreServs,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $typechambre = TypeChambre::findOrFail($id);
        return Inertia::render('PagesAdmin/TypeChambres/edit', ['typechambre' => $typechambre]);
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
            'prix_par_nuit' => 'required|integer',
            'nbr_per' => 'required|integer',
            'description' => 'required|string|max:2000',
            'image1' => 'nullable|file|image|max:2048',
            'image2' => 'nullable|file|image|max:2048',
            'image3' => 'nullable|file|image|max:2048',
            'image4' => 'nullable|file|image|max:2048',
            'typeChambre' => 'required|string|in:Chambre standard,Chambre double,Chambre twin,Suite,Chambre familiale,Chambre avec vue,Chambre de luxe,Chambre exécutive',
        ]);
        // if ($request->hasFile('image1')) {
        //     $image1 = $request->file('image1');
        //     $imageName1 = time() . '.' . $image1->getClientOriginalExtension();
        //     $image1->move(public_path('image'), $imageName1);
        // } else {
        //     $imageName1 = null;
        // }
        // if ($request->hasFile('image2')) {
        //     $image2 = $request->file('image2');
        //     $imageName2 = time() . '.' . $image2->getClientOriginalExtension();
        //     $image2->move(public_path('image'), $imageName2);
        // } else {
        //     $imageName2 = null;
        // }
        // if ($request->hasFile('image3')) {
        //     $image3= $request->file('image3');
        //     $imageName3 = time() . '.' . $image3->getClientOriginalExtension();
        //     $image3->move(public_path('image'), $imageName3);
        // } else {
        //     $imageName3 = null;
        // }
        // if ($request->hasFile('image4')) {
        //     $image4 = $request->file('image4');
        //     $imageName4 = time() . '.' . $image4->getClientOriginalExtension();
        //     $image4->move(public_path('image'), $imageName4);
        // } else {
        //     $imageName4 = null;
        // }
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
    
        $typechambre = TypeChambre::findOrFail($id);
        $typechambre->prix_par_nuit = $request->prix_par_nuit;
        $typechambre->nbr_per = $request->nbr_per;
        $typechambre->description = $request->description;
        $typechambre->typeChambre = $request->typeChambre;
        
        // Initialize Google Translate
        $tr = new GoogleTranslate();

        // Translate typeChambre
        $typechambre->translated_nom_chambre_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->typeChambre);
        $typechambre->translated_nom_chambre_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->typeChambre);
        $typechambre->translated_nom_chambre_es = $tr->setSource('auto')->setTarget('es')->translate($request->typeChambre);
        $typechambre->translated_nom_chambre_en = $tr->setSource('auto')->setTarget('en')->translate($request->typeChambre);

        // Translate description
        $typechambre->translated_description_chambre_fr = $tr->setSource('auto')->setTarget('fr')->translate($request->description);
        $typechambre->translated_description_chambre_ar = $tr->setSource('auto')->setTarget('ar')->translate($request->description);
        $typechambre->translated_description_chambre_es = $tr->setSource('auto')->setTarget('es')->translate($request->description);
        $typechambre->translated_description_chambre_en = $tr->setSource('auto')->setTarget('en')->translate($request->description);
        // $typechambre->image1 = $imageName1;
        // $typechambre->image2 = $imageName2;
        // $typechambre->image3 = $imageName3;
        // $typechambre->image4 = $imageName4;
        $typechambre->image1 = $file1  ?? '';
        $typechambre->image2 = $file2  ?? '';
        $typechambre->image3 = $file3  ?? '';
        $typechambre->image4 = $file4  ?? '';

        $typechambre->save();

        return redirect()->route('typechambres.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $typechambre = TypeChambre::findOrFail($id);
        $typechambre->delete();
        return redirect()->route('typechambres.index');
    }

    public function getImage($image1)
    {
        $imagePath = public_path('image/'.$image1);

        if (file_exists($imagePath)) {
            return response()->file($imagePath);
        }

        return abort(404);
    }


    
    

    
   
        // Other methods...
    
        /**
         * Search for available room types based on dates and number of people.
         *
         * @param  \Illuminate\Http\Request  $request
         * @return \Illuminate\Http\Response
         */
        public function search(Request $request)
        {
            $dateDebut = $request->input('dateDebut');
            $dateFin = $request->input('dateFin');
            $nbrPersonne = $request->input('nbrPersonne');
    
            $query = TypeChambre::query();
    
            if ($nbrPersonne) {
                $query->whereHas('chambres', function ($query) use ($nbrPersonne) {
                    $query->where('nbr_per', '>=', $nbrPersonne);
                });
            }
    
            if ($dateDebut && $dateFin) {
                try {
                    $dateDebut = Carbon::parse($dateDebut);
                    $dateFin = Carbon::parse($dateFin);
                } catch (\Exception $e) {
                    Log::error($e->getMessage());
                    return inertia('PageClient/ListeTypeChambres', ['typechambres' => [], 'message' => 'Invalid date format.']);
                }
    
                $query->whereHas('chambres', function ($query) use ($dateDebut, $dateFin) {
                    $query->whereDoesntHave('reservations', function ($query) use ($dateDebut, $dateFin) {
                        $query->where(function ($query) use ($dateDebut, $dateFin) {
                            $query->whereBetween('date_debut', [$dateDebut, $dateFin])
                                  ->orWhereBetween('date_fin', [$dateDebut, $dateFin])
                                  ->orWhere(function ($query) use ($dateDebut, $dateFin) {
                                      $query->where('date_debut', '<=', $dateDebut)
                                            ->where('date_fin', '>=', $dateFin);
                                  });
                        });
                    });
                });
            }
    
            try {
                $typechambres = $query->get();
            } catch (\Exception $e) {
                Log::error($e->getMessage());
                return inertia('PageClient/ListeTypeChambres', ['typechambres' => [], 'message' => 'An error occurred while processing your request. Please try again later.']);
            }
    
            return inertia('PageClient/ListeTypeChambres', ['typechambres' => $typechambres]);
        }
   
    


    
    
   // Assuming you use this package

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
       'titre'=>'Services de Concierge, Restauration, Bien-être',
       'descrip'=> 'Notre concierge est à votre disposition pour organiser vos déplacements, réservations de restaurants, et répondre à toutes vos demandes spécialesNous nous engageons à offrir un service de qualité pour que votre séjour soit mémorable et agréable. Nhésitez pas à nous contacter pour toute demande ou information supplémentaire. Nous sommes impatients de vous accueillir. Explorez tout, de nos occasions spéciales à nos espaces de réunion polyvalents et plus encore avec The Rees',
     'bienvenu'=>'Bienvenue à Notre Hôtel',
     'text'=>'Nous sommes ravis de vous accueillir à Cazy suite, où le confort, le luxe et le service exceptionnel se rencontrent pour créer une expérience inoubliable.',
        // Add other text strings you want to translate
    ];

    $lang = $request->input('lang', 'auto'); // Default language is English if not specified

    $translations = [];
    $translator = new GoogleTranslate();

    foreach ($textToTranslate as $key => $text) {
        $translatedText = $translator->setSource('auto')->setTarget($lang)->translate($text);
        $translations[$key] = $translatedText;
    }

    return response()->json(['translations' => $translations]);
}
}