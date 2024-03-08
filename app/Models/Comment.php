<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user', 'texte'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }
}
