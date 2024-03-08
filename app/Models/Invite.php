<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invite extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_user', 'nbrInvite', 'nomComplet', 'cin', 'tele', 'email'
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }
}
