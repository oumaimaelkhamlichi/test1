<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TypeChambre;


use Inertia\Inertia;


use App\Models\Comment;
class HomeController extends Controller
{
    public function home()
    {
        $typechambres = TypeChambre::all();
        $comments = Comment::all();
        return Inertia::render('PageClient/Home', [
            'comments' => $comments,
            'typechambres' => $typechambres,
        ]);
    }
    
}
