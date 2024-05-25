<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    protected function authenticated(Request $request, $user)
    {
        if ($user->role == 'admin') {
            return redirect()->intended(RouteServiceProvider::HOME);
        } else {
            return redirect()->route('MyPages.Home');
        }
}
}
