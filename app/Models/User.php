<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'cin',
        'email',
        'date_naissance',
        'numero_telephone',
        'nationalite',
        'password',
        'role',
        'google_id',
        'adresse',
        'ville',
        'pays',
        'nombre_enfants',
        'etat_civil'
        
    ];
    public function reservations(){
        return $this->hasMany(Reservation::class,'id_user');
    }
    public function comments(){
        return $this->hasMany(Comment::class,'id_user');
    }
    public function invites(){
        return $this->hasMany(Invite::class,'id_user');
    }


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
