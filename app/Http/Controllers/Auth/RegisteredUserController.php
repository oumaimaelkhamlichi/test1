<?php 
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

// class RegisteredUserController extends Controller
// {
    /**
     * Display the registration view.
     */
    // public function create(): Response
    // {
    //     return Inertia::render('Auth/Register');
    // }
    //    public function index(){
    //     $users=User::all();
    //     return Inertia::render('Auth/Register',['users'=>$users]);
    // }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    // public function store(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'cin' => 'required|string',
    //         'date_naissance' => 'required|date|max:255',
    //         'numero_telephone' => 'required|numeric',
    //         'nationalite' => 'required|string|max:50',
    //         'email' => 'required|string|email|max:255|unique:'.User::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);
        
        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'date_naissance' => $request->date_naissance,
        //     'cin' => $request->cin,
        //     'nationalite'=> $request->nationalite,
        //     'numero_telephone' =>$request->numero_telephone,
        //     //'role' =>$request->role,
        //     'password' => Hash::make($request->password),
        // ]);


//         event(new Registered($user));

//         Auth::login($user);
//         return redirect(RouteServiceProvider::HOME);
//     }
// }








class RegisteredUserController extends Controller
{
    public function index(): Response
    {
        $users = User::all();
        return Inertia::render('PagesAdmin/Client/index', ['users' => $users]);
    }

    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    //  return Inertia::render('PagesAdmin/Client/create');

    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'cin' => 'required|string',
            'date_naissance' => 'required|date',
            'numero_telephone' => 'required|numeric',
            'nationalite' => 'required|string|max:50',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'ville' => 'required|string',
            'adresse' => 'required|string',
            'pays' => 'required|string',
            'nombre_enfants' => 'required|integer',
            'etat_civil' => 'required|in:célibataire,marié',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'date_naissance' => $request->date_naissance,
            'cin' => $request->cin,
            'nationalite' => $request->nationalite,
            'numero_telephone' => $request->numero_telephone,
            'password' => Hash::make($request->password),
            'adresse' => $request->adresse,
            'pays' => $request->pays,
            'nombre_enfants' => $request->nombre_enfants,
            'etat_civil' => $request->etat_civil,
        ]);

        // event(new Registered($user));
        // Auth::login($user);

        // return redirect(RouteServiceProvider::HOME);
        return redirect()->route('users.index');
    }

    public function show(User $user): Response
    {
        return Inertia::render('PagesAdmin/Client/show', ['user' => $user]);
    }

    public function edit(User $user): Response
    {
        return Inertia::render('PagesAdmin/Client/EditClient', ['user' => $user]);
    }

    public function update(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        $user->update($request->all());

        return redirect()->route('users.index');
    }

    public function destroy(string $id): RedirectResponse
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('users.index');
    }

    public function search(Request $request): Response
    {
        $request->validate(['search' => 'required|string']);
        $searchTerm = $request->input('search');
        $users = User::where('name', 'like', '%' . $searchTerm . '%')->get();

        return Inertia::render('PagesAdmin/Client/index', ['users' => $users]);
    }
}
