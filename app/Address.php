<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{

    protected $fillable = [
        'state', 'country', 'address', 'user_id',
    ];

    public function user() {
        return $this->belongsTo('App\User');
    }
}
