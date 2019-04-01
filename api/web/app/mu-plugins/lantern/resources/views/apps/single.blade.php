@extends('layouts.app')

@section('content')
  <h1>App</h1>
  <div id="app">
    @foreach($appData as $key => $value)
      <entry property='{{ $key }}' value='{{ $value }}'></entry>
    @endforeach
  </div>
@endsection
