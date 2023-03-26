<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [TestController::class, 'test']);


Route::group(["middleware" => ["auth"]],function(){
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::get("/posts/removeOld",[PostController::class, "removeOldPosts"]);
Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');

Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
Route::put('/posts', [PostController::class, 'update'])->name('posts.update');
Route::delete('/posts/{post}/delete', [PostController::class, 'destroy'])->name('posts.destroy');
});

/* Route::get("/posts/removeOld",[PostController::class, "removeOldPosts"]);
Route::resource('posts', PostController::class)->middleware("auth"); */


Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/auth/github/redirect',[PostController::class,'githubredirect'])->name('githublogin');
Route::get('/auth/github/callback',[PostController::class,'githubcallback']);

Route::get('/auth/google/redirect',[PostController::class,'googleredirect'])->name('googlelogin');
Route::get('/auth/google/callback',[PostController::class,'googlecallback']);
