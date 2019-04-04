<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Application Routes (Public)
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

Route::get('/microsite/{name}', 'LocalDisplayController@writeToDisksAndServeHTTP');
Route::get('/', 'LocalDisplayController@writeToDisksAndServeHTTP');
