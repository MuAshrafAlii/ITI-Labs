@extends('layouts.app')

@section('title') Show @endsection

@section('content')
<form method="PUT" action="{{route('posts.update')}}">
    @csrf
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Title</label>
      <input class="form-control form-control-lg" type="text" required>
    </div>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
      </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Post Creator</label>
      <input class="form-control form-control-lg" type="text" required>
    </div>
    <button type="submit" class="btn btn-primary">Update</button>
  </form>

@endsection
