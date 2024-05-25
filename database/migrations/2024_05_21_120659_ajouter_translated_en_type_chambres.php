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
            $table->string('translated_type_chambre_en')->nullable();
            $table->text('translated_description_en')->nullable();
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
            $table->dropColumn('translated_type_chambre_en');
            $table->dropColumn('translated_description_en');
        });
    }
};
