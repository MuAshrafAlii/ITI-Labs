<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Jobs\PruneOldPostsJob;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $allPosts = Post::paginate(5);

        return view('post.index', ['posts' => $allPosts]);
    }

    public function show($id)
    {
        $post = Post::find($id);
        $users = User::all();

        return view('post.show', [
            'post' => $post,
            'users' => $users
        ]);
    }

    public function create() {
        $users = User::all();
        
        return view('post.create', ["users" => $users]);
    }

    public function store(StorePostRequest $request)
    {

        $title = $request->title;
        $description = $request->description;
        $postCreator = $request->post_creator;

        $post = Post::create([
            'title' => $title,
            'description' => $description,
            'user_id' => $postCreator
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = $image->getClientOriginalName();
            $path = Storage::putFileAs('posts', $image, $filename);
            $post->image_path = $path;
            $post->save();
        }

        return redirect()->route("posts.index");
    }

    public function edit($id)
    {

        $post = Post::find($id);
        $users = User::all();

        return view("post.edit",[
            "post" => $post,
            "users" => $users
        ]);
    }


    public function update(UpdatePostRequest $request)
    {
        
        $post = Post::findOrFail($request["id"]);

        if ($request->hasFile('image')) {
            if ($post->image_path) {
                Storage::delete($post->image_path);
            }
            $image = $request->file('image');
            $filename = $image->getClientOriginalName();
            $path = Storage::putFileAs('posts', $image, $filename);
            $post->image_path = $path;
        }

        $post->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'description' => $request->description,
            'user_id' => $request->post_creator,
        ]);

        return redirect()->route("posts.index");
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        if ($post->image_path && Storage::exists($post->image_path)) {
            Storage::delete($post->image_path);
        }

        Post::where('id', $id)->delete();
        return redirect()->route("posts.index");
    }

    public function removeOldPosts() {
        PruneOldPostsJob::dispatch();
        return redirect()->route("posts.index");
    }
}
