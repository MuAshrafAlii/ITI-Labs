<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $allPosts = [
            [
                'id' => 1,
                'title' => 'Laravel',
                'posted_by' => 'Ahmed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 2,
                'title' => 'PHP',
                'posted_by' => 'Mohamed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 3,
                'title' => 'Javascript',
                'posted_by' => 'Ali',
                'created_at' => '2022-08-01 10:00:00'
            ],
        ];

        return view('post.index', ['posts' => $allPosts]);
    }


    public function store()
    {
        $allPosts = [
            [
                'id' => 1,
                'title' => 'Laravel',
                'posted_by' => 'Ahmed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 2,
                'title' => 'PHP',
                'posted_by' => 'Mohamed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 3,
                'title' => 'Javascript',
                'posted_by' => 'Ali',
                'created_at' => '2022-08-01 10:00:00'
            ],
        ];

        return view('post.index', ['posts' => $allPosts]);
    }

    public function show($id)
    {
        $post =  [
            'id' => 3,
            'title' => 'Javascript',
            'posted_by' => 'Ali',
            'created_at' => '2022-08-01 10:00:00',
            'description' => 'hello description',
        ];

        return view('post.show', ['post' => $post]);
    }

    public function create() {
        return view('post.create');
    }

    public function edit($id)
    {
        $post =  [
            'id' => 3,
            'title' => 'Javascript',
            'posted_by' => 'Ali',
            'created_at' => '2022-08-01 10:00:00',
            'description' => 'hello description',
        ];

        return view('post.edit', ['post' => $post]);
    }


    public function update()
    {
        $allPosts = [
            [
                'id' => 1,
                'title' => 'Laravel',
                'posted_by' => 'Ahmed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 2,
                'title' => 'PHP',
                'posted_by' => 'Mohamed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 3,
                'title' => 'Javascript',
                'posted_by' => 'Ali',
                'created_at' => '2022-08-01 10:00:00'
            ],
        ];

        return view('post.index', ['posts' => $allPosts]);
    }
}
