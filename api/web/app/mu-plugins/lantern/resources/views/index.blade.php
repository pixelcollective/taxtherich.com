@extends('layout.app')

@section('content')
    <div id="app">
      <hello app='{{ $app->name }}'></hello>
    </div>
@endsection