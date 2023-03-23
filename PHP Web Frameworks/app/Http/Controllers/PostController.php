<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\User;
use App\Http\Requests\StorePostRequest;
use App\Jobs\PruneOldPostsJob;
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

        Post::create([
            'title' => $title,
            'description' => $description,
            'user_id' => $postCreator
        ]);

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


    public function update(StorePostRequest $req)
    {
        Post::where('id', $req['id'])->update([
            'title' => $req['title'],
            'description' => $req['description'],
            'slug' => Str::slug($req['title']),
            'user_id' => $req['post_creator']
        ]);

        return redirect()->route("posts.index");
    }

    public function destroy($id)
    {
        Post::where('id', $id)->delete();
        return redirect()->route("posts.index");
    }

    public function removeOldPosts() {
        PruneOldPostsJob::dispatch();
        return redirect()->route("posts.index");
    }
}
