<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chambres', function (Blueprint $table) {
            $table->id();
            $table->integer('numero');
            $table->string('nom_chambre',100);           
            $table->integer('prix_chambre');
            $table->string('description_chambre');
            
            $table->boolean('disponible')->default(true);
            $table->enum('typeChambre', ['standard', 'double','twin', 'luxe','familaile','executive'])->default('standard');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chambres');
    }
};
