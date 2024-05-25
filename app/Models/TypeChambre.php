<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeChambre extends Model
{
    use HasFactory;
    protected $fillable = [
   
        'prix_par_nuit', 
        'description', 
        'typeChambre', 
        'image1', 
        'image2', 
        'image3', 
        'image4',
        // 'translated_type_chambre_fr',
        // 'translated_type_chambre_ar',
        // 'translated_type_chambre_es',
        // 'translated_type_chambre_en',
        // 'translated_description_fr',
        // 'translated_description_ar',
        // 'translated_description_es',
        // 'translated_description_en'
    ];

    public function chambres()
    {
        return $this->hasMany(Chambre::class, 'type_chambre_id');
    }
//     public function chambreServices()
// {
//     return $this->hasMany(ChambreService::class);
// }
    public function chambreServs()
    {
        return $this->hasMany(ChambreService::class, 'type_chambre_id');
    }
}