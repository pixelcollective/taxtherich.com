@extends('_layouts.master')

@section('content')
  @foreach ($posts as $post)
    <div class="brand">
      <img src="images/tax-the-rich.png" class="logo" alt="{!! $post->heading !!}" title="{!! $post->heading !!}" />
    </div>
    @include('_components.hero')
    @include('_components.context')
    @include('_components.provisions')
  @endforeach
@stop
