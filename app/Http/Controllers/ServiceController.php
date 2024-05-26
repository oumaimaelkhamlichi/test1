<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $services = Service::all();
        return inertia::render('PagesAdmin/Services/index', ['services' => $services,'nom'=>'oumaima']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('PagesAdmin/Services/create');
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
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation as needed
        ]);
    
        $service = new Service();
        $service->nom = $request->nom;
        $service->description = $request->description;
    
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = Str::random(10) . '.' . $file->getClientOriginalExtension();
            $path = 'public/images';
            $file->move(public_path($path), $fileName);
            $service->image = $path . '/' . $fileName;
        }
    
        $service->save();
    
        return redirect()->route('services.index');
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
       
    }
    public function afficher()
    {
        $services = Service::all();
        return inertia::render('PagesAdmin/Services/show', ['services' => $services,'nom'=>'oumaima']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $service->nom = $request->nom;
        $service->description = $request->description;

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($service->image) {
                $oldImagePath = public_path($service->image);
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }

            $file = $request->file('image');
            $fileName = Str::random(10) . '.' . $file->getClientOriginalExtension();
            $path = 'images';
            $file->move(public_path($path), $fileName);
            $service->image = $path . '/' . $fileName;
        }

        $service->save();

        return redirect()->route('services.index');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();
    }
}
