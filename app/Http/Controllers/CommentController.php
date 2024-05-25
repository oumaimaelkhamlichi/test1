<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::with('user', 'typeChambre')->get();
        return Inertia::render('PageClient/comments/CommentBox', ['comments' => $comments]);
    }

    public function create()
    {
        // return Inertia::render('PageClient/comments/CommentBox'); // Assuming you have a separate component for creating comments
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'texte' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'jadore' => 'sometimes|boolean',
            'id_type_chambre' => 'required|exists:type_chambres,id'
        ]);

        $comment = new Comment();
        $comment->id_user = auth()->user()->id;
        $comment->texte = $validatedData['texte'];
        $comment->rating = $validatedData['rating'];
        $comment->jadore = $request->has('jadore') ? $validatedData['jadore'] : false;
        $comment->id_type_chambre = $validatedData['id_type_chambre'];
        $comment->save();

        // return redirect()->route('PagesAdmin.comments.index')->with('success', 'Comment added successfully!');
    }

    public function update(Request $request, Comment $comment)
    {
        $validatedData = $request->validate([
            'texte' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'jadore' => 'sometimes|boolean',
            'id_type_chambre' => 'required|exists:type_chambres,id'
        ]);

        $comment->id_user = auth()->user()->id;
        $comment->texte = $validatedData['texte'];
        $comment->rating = $validatedData['rating'];
        $comment->jadore = $request->has('jadore') ? $validatedData['jadore'] : false;
        $comment->id_type_chambre = $validatedData['id_type_chambre'];
        $comment->save();

        return redirect()->route('PagesAdmin.comments.index')->with('success', 'Comment updated successfully!');
    }

    public function destroy(string $id)
    {
        $comment = Comment::findOrFail($id);
        $comment->delete();
        return redirect()->route('PagesAdmin.comments.index')->with('success', 'Comment deleted successfully!');
    }
}