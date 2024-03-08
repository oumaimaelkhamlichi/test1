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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('cin');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->date('date_naissance');
            $table->string('numero_telephone');
            $table->string('nationalite');
            $table->string('password');
            $table->enum('role', ['client', 'admin'])->default('client');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
