<?php

use App\Http\Controllers\MensajeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('mensajes', [MensajeController::class, 'index']);
Route::get('mensajes/{id}', [MensajeController::class, 'show']);
Route::post('mensajes', [MensajeController::class, 'store']);
Route::put('mensajes/{id}', [MensajeController::class, 'update']);
Route::delete('mensajes/{id}', [MensajeController::class, 'destroy']);