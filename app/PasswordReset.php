<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $table_name = 'password_resets';

    protected $fillable = [
        'email', 'token'
    ];

    public function user() {
        return $this->belongsTo('App\User', 'email', 'email');
    }

}
