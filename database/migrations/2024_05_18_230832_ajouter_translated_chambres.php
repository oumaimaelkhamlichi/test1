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
        Schema::table('chambres', function (Blueprint $table) {
            $table->string('translated_nom_chambre_fr')->nullable();
            $table->text('translated_description_chambre_fr')->nullable();
            $table->string('translated_nom_chambre_ar')->nullable();
            $table->text('translated_description_chambre_ar')->nullable();
            $table->string('translated_nom_chambre_es')->nullable();
            $table->text('translated_description_chambre_es')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('chambres', function (Blueprint $table) {
            $table->dropColumn('translated_nom_chambre_fr');
            $table->dropColumn('translated_description_chambre_fr');
            $table->dropColumn('translated_nom_chambre_ar');
            $table->dropColumn('translated_description_chambre_ar');
            $table->dropColumn('translated_nom_chambre_es');
            $table->dropColumn('translated_description_chambre_es');  
        });
    }
};
