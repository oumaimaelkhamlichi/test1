<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->date('date_debut')->nullable();
            $table->date('date_fin')->nullable();
            $table->string('statu',100);
            $table->integer('etoile');
            $table->date('date_reservation');
            $table->integer('nbr_personne');
            $table->integer('nbr_children')->limit(6)->nullable();
            $table->integer('nbr_nuit');
            $table->integer('numero_chambre')->unsigned(); // Chambre number as foreign key
            $table->foreignId('id_chambre')->constrained('chambres');
            $table->foreignId('id_user')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reservations');
    }
};
