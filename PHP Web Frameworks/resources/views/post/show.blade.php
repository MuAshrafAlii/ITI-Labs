@extends('layouts.app')

@section('title') Show @endsection

@section('content')
    <div class="card mt-6">
        <div class="card-header">
           <h3>Post Info</h3>
        </div>
        <div class="card-body">
            <h5 class="card-title">Title: {{$post['title']}}</h5>
            <p class="card-text">Description: {{$post['description']}}</p>
        </div>
    </div>

    <div class="card mt-6">
        <div class="card-header">
           <h3>Post Creator Info</h3>
        </div>
        <div class="card-body">
            <h5 class="card-title">Name: {{$post->user->name}}</h5>
            <h6 class="card-text">Email: {{$post->user->email}}</h6>
            <h6 class="card-text">Created At: {{$post->created_at}}</h6>
        </div>
    </div>

@endsection
