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
        Schema::table('type_chambres', function (Blueprint $table) {
            $table->string('translated_type_chambre_fr')->nullable();
            $table->text('translated_description_fr')->nullable();
            $table->string('translated_type_chambre_ar')->nullable();
            $table->text('translated_description_ar')->nullable();
            $table->string('translated_type_chambre_es')->nullable();
            $table->text('translated_description_es')->nullable();
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('type_chambres', function (Blueprint $table) {
            $table->dropColumn('translated_type_chambre_fr');
            $table->dropColumn('translated_description_fr');
            $table->dropColumn('translated_type_chambre_ar');
            $table->dropColumn('translated_description_ar');
            $table->dropColumn('translated_type_chambre_es');
            $table->dropColumn('translated_description_es');
        });
    }
};
