<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user', 'texte', 'rating', 'jadore', 'id_type_chambre'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    // public function reservation()
    // {
    //     return $this->belongsTo(Reservation::class);
    // }
    public function typeChambre()
    {
        return $this->belongsTo(TypeChambre::class, 'id_type_chambre');
    }
}
