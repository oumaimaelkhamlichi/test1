<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {

        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }
   

    /**
     * Handle an incoming authentication request.
     */
//     public function store(LoginRequest $request): RedirectResponse
//     {
//         $request->authenticate();

//         $request->session()->regenerate();
//         return redirect()->intended(RouteServiceProvider::HOME);
// // mon traitement 
// // $userAuth=Auth::user();
// // if($userAuth->role=='admin'){
// //     redirect()->intended(RouteServiceProvider::HOME);
// // }
// // else{
// //     return redirect()->route('typechambre.index2');
// // }
// // // mon traitement 
// //         return redirect()->intended(RouteServiceProvider::HOME);
//     }
public function store(LoginRequest $request): RedirectResponse
{
    $request->authenticate();

    $request->session()->regenerate();

    // Récupérer l'utilisateur authentifié
    $user = Auth::user();

    // Vérifier le rôle de l'utilisateur
    if ($user->role === 'admin'&& $user->cin =='r45566') {
        return redirect()->intended(RouteServiceProvider::HOME);
        // return redirect()->route('/dashbord');

    } 
    else{
        return redirect()->route('homee');
    }
    // if ($user->role == 'client'){
    //     return redirect()->route('MyPages.wel');
    // }
}
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
