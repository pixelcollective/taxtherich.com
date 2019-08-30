<!doctype html>
<html {!! get_language_attributes() !!}>
  @include('partials.head')

  <body @php(body_class())>
    @php(wp_body_open())
    @php(do_action('get_header'))

    <div class="wrap container">
      <div class="content">
        <main class="main">
          @yield('content')
        </main>
      </div>
    </div>

    @php(do_action('get_footer'))

    @php(wp_footer())
  </body>
</html>
