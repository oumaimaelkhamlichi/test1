<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
          'date_debut', 'date_fin', 'statu', 'date_reservation', 'nbr_personne', 'nbr_children', 'nbr_nuit',  'id_chambre', 'id_user','type_chambre_id'
    ];
    public function chambre()
    {
        return $this->belongsTo(Chambre::class, 'id_chambre');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function invites()
    {
        return $this->hasMany(Invite::class);
    }
    public function typeChambre()
    {
        return $this->belongsTo(TypeChambre::class, 'type_chambre_id');
    }
}
