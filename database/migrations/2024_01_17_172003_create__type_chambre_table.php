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
        Schema::create('type_chambres', function (Blueprint $table) {
            $table->id();
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();
            $table->string('image4')->nullable();
            $table->enum('typeChambre', ['Chambre standard', 'Chambre double', 'Chambre twin', 'Suite', 'Chambre familiale', 'Chambre avec vue', 'Chambre de luxe','Chambre exécutive']);
            $table->string('description');
          
            $table->integer('prix_par_nuit');
             
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
        Schema::dropIfExists('type_chambres');
    }
};
