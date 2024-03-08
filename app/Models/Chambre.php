<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chambre extends Model
{
    use HasFactory;
    protected $fillable = [
        'numero', 'nom_chambre', 'prix_chambre', 'description_chambre', 'image1','image2','image3','image4', 'disponible', 'typeChambre'
    ];
    public function reservations()
    {
        return $this->hasMany(Reservation::class,'user_id');
    }
}
