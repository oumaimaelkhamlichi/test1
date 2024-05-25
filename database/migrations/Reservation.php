<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'date_debut',
        'date_fin',
        'statu',
        'etoile',
        'date_reservation',
        'nbr_personne',
        'nbr_children',
        'nbr_nuit',
        'id_chambre',
        'id_user',
    ];    public function chambre()
    {
        return $this->belongsTo(Chambre::class, 'id_chambre');
    }

    /**
     * Récupère l'utilisateur associé à la réservation.
     */
    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
   
