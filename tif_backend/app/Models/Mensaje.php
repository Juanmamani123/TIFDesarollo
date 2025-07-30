<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{
    //use HasFactory;
    public $timestamps = false;
    protected $table = 'mensajes';
    protected $fillable = ['mensaje'];
}
