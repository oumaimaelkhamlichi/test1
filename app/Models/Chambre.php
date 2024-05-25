<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chambre extends Model
{
    // $table->id();
    // $table->integer('numero');
    // $table->integer('nbr_per');
    // $table->string('nom_chambre',100);           
    // $table->integer('prix_chambre');
    // $table->string('description_chambre');
    // $table->string('image1');
    // $table->string('image2')->nullable();
    // $table->string('image3')->nullable();
    // $table->string('image4')->nullable();

    // $table->boolean('disponible')->default(true);
    // $table->enum('typeChambre', ['standard', 'double','twin', 'luxe','familaile','executive','avecVue'])->default('standard');
    // $table->timestamps()
    use HasFactory;
    protected $fillable = [
        'numero', 'nom_chambre', 'prix_chambre', 'description_chambre', 'image1','image2','image3','image4', 'disponible', 'type_chambre_id','nbr_per'
    ];
    public function reservations()
    {
        return $this->hasMany(Reservation::class,'id_chambre');
    }
    public function serviceChambre()
    {
        return $this->hasOne(ChambreService::class, 'id_chambre');
    }
    public function typeChambre()
    {
        return $this->belongsTo(TypeChambre::class, 'type_chambre_id');
    }
}
