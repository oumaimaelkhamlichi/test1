<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChambreService extends Model
{
    use HasFactory;

    protected $fillable = [
        'type_chambre_id',
       
        'vuePlage',
        'wifi',
        'nbrlit',
        'ch_Rideaux',
        'ch_climat',
        'ch_menage',
        'ch_bureaux',
        'ch_armoire',
        'ch_poubelle',
        'ch_cuisine',
        'nour_service',
        'nour_eauMiniral',
        'nour_ftour',
        'nour_rda',
        'nour_acha',
        'bain_peignoire',
        'bain_serviete',
        'bain_douche',
        'bain_articleToiette',
        'bain_salleBainPrivee',
        'bain_lavabo',
        'telephone',
        'tv',
    ];

   

    // Méthode pour obtenir la chambre associée au service
    public function typechambre()
    {
        return $this->belongsTo(TypeChambre::class, 'type_chambre_id');
    }
   
}
