@extends('layouts.app')

@section('content')
  @include('components.brand')
  @include('components.hero')
  @include('components.context')
  @include('components.provisions')
@endsection

@push('scripts')
  <script type="text/javascript" src="@public('js/app.js')"></script>
  <script type="text/javascript" src="https://actionnetwork.org/widgets/v3/petition/add-your-name-tax-the-rich?format=js&source=widget"></script>
@endpush