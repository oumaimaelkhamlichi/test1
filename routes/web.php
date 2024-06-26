<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ChambreController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChambreServiceController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DashbordController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TypeChambreController;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('MyPages/Navabar', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/loginn', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/recherchetypechambre', [TypeChambreController::class, 'search'])->name('recherche.index2');
Route::get('/', [HomeController::class, 'home'])->name('homee');

// Route::get('/', function () {
//     return Inertia::render('Auth/Login');
// });
Route::get('/Liens',function(){
    return  Inertia::render('MyPages/Liens');
});
//chambre
 Route::resource('chambres', 'App\Http\Controllers\ChambreController');
 Route::resource('services', 'App\Http\Controllers\ServiceController');
Route::resource('reservation', 'App\Http\Controllers\ReservationController');
Route::resource('serchambre', 'App\Http\Controllers\ChambreServiceController');
Route::resource('typechambres', TypeChambreController::class);


// Route::resource('dashbord', 'App\Http\Controllers\DashbordController')->middleware(['auth', 'verified']);

// Route::get('/dashbord', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
//chambre
//Clients
Route::get('/pagee', function () {
    return Inertia::render('PageClient/Event');
});
Route::get('/gallery', function () {
    return Inertia::render('MyPages/ImgStyle');
});

//Clients
Route::get('/reservation/success', [ReservationController::class, 'success'])->name('reservation.success');
Route::get('/reservation/error', [ReservationController::class, 'error'])->name('reservation.error');

Route::put('/reservations/cancel/{id}', [ReservationController::class, 'cancel']);

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/dashbord', function () {
//     return Inertia::render('Dashboard');
// })->name('dashboard');
Route::get('/wel',function(){
    return Inertia::render('MyPages/Home');
})->name('MyPages.wel')->middleware(['auth', 'verified']);
Route::get('/main',function(){
    return Inertia::render('MyPages/Main');
});

Route::get('/contact',function(){
    return Inertia::render('MyPages/Contact');
})->name('MyPages.Contact');

Route::get('afficher', [ServiceController::class, 'afficher'])->name('services.afficher');
// nouveau                                                           
Route::get('create1', [ReservationController::class, 'create1'])->name('reservation.create1')->middleware(['auth', 'verified']);;
Route::post('store1', [ReservationController::class, 'store1'])->name('reservation.store1');
Route::get('/reservation/success', function () {
    return Inertia::render('ReservationSuccess');
})->name('reservation.success');

// nouveau
Route::get('/Register',function(){
    return Inertia::render('Auth/register');
});

Route::resource('users', RegisteredUserController::class);
// Route::get('/users', [RegisteredUserController::class, 'index']);
// Route::postz('logout', 'Auth\AuthenticatedSessionController@destroy');
Route::middleware('auth')->group(function () {
  
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('auth/google', [GoogleController::class, 'redirect'])->name('google-auth');
Route::get('auth/google/call-back', [GoogleController::class, 'callbackGoogle']);
// client routes

// middleware 
Route::get('/translations', [TypeChambreController::class, 'getTranslations']);
// Route::middleware(['role:admin'])->group(function () {
    // Route::get('/', function () {
    //     return Inertia::render('Auth/Login', [
    //         'canLogin' => Route::has('login'),
    //         'canRegister' => Route::has('register'),
    //         'laravelVersion' => Application::VERSION,
    //         'phpVersion' => PHP_VERSION,
    //     ]);
    // });
    // Route::get('/admin', [AdminController::class, 'index'])->name('admin.home');
//     Route::resource('chambres', 'App\Http\Controllers\ChambreController');
//  Route::resource('service', 'App\Http\Controllers\ServiceController');
// Route::resource('reservation', 'App\Http\Controllers\ReservationController');
// Route::resource('serchambre', 'App\Http\Controllers\ChambreServiceController');
Route::resource('typechambre', TypeChambreController::class);
Route::resource('dashbord', 'App\Http\Controllers\DashbordController')->middleware(['auth', 'verified']);
// });
// hii
// Route::get('/', function () {
//     $user = Auth::user();
//     if ($user->role == 'admin') {
//         return redirect()->intended(RouteServiceProvider::HOME);
//     } else {
//         return redirect()->route('MyPages.Home');
//     }
// });
Route::get('recherchetypechambre/image/{image}', [TypeChambreController::class, 'getImage'])->name('tchambre.image');
Route::get('/typechambre/index2', [TypeChambreController::class, 'index2'])->name('typechambre.index2');
Route::get('/home', function () {
    $user = Auth::user();
    if ($user->role == 'admin') {
        return redirect()->intended(RouteServiceProvider::HOME);
    } else {
        Route::get('/', [HomeController::class, 'home'])->name('homee');
    }
})->name('home');

require __DIR__.'/auth.php';
