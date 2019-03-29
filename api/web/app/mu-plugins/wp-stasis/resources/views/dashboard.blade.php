@extends('layout.app')

@section('react')
  <div id="wp-stasis-admin-container"></div>
@endsection

@section('scripts')
  <script type="text/javascript" src="{!! $react !!}"></script>
@endsection

@section('styles')
#wp-stasis-admin-container {
  min-height: 100vh;
}

#wpcontent {
  padding-left: 0 !important;
  min-height: 100vh;
  background: #eaeaea;
}
@endsection
