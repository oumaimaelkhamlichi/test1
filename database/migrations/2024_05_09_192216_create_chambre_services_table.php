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
        Schema::create('chambre_services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_chambre_id')->constrained('type_chambres')->onDelete('cascade');
         
            $table->string('vuePlage');
            $table->string('wifi');
            $table->string('nbrlit');
            $table->boolean('ch_Rideaux')->default(true);
            $table->boolean('ch_climat')->default(true);
            $table->boolean('ch_menage')->default(true);
            $table->boolean('ch_bureaux')->default(true);
            $table->boolean('ch_armoire')->default(true);
            $table->boolean('ch_poubelle')->default(true);
            $table->boolean('ch_cuisine')->default(true);

// hhh
$table->boolean('nour_service')->default(true);
$table->boolean('nour_eauMiniral')->default(true);
$table->boolean('nour_ftour')->default(true);
$table->boolean('nour_rda')->default(true);
$table->boolean('nour_acha')->default(true);
// BAIN
$table->boolean('bain_peignoire')->default(true);
$table->boolean('bain_serviete')->default(true);
$table->boolean('bain_douche')->default(true);
$table->boolean('bain_articleToiette')->default(true);
$table->boolean('bain_salleBainPrivee')->default(true);
$table->boolean('bain_lavabo')->default(true);
//divertissement
$table->boolean('telephone')->default(true);
$table->boolean('tv')->default(true);
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
        Schema::dropIfExists('chambre_services');
    }
};
