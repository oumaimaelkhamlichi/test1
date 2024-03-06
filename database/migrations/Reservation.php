<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = ['id','date_debut','date_fin','statu','nmbr_personne','nmbr_nuit','id_client','id_type_client','id_paiment','id_mode_paiment','id_type_chambre',];
}
