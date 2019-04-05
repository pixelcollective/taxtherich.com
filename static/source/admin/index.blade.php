<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="{{ mix('css/app.css', 'assets/build') }}">
    <title>Admin | {{ $page->site->title }}</title>
    <link href="config.yml" type="text/yaml" rel="cms-config-url">
</head>
<body>
    @foreach ($posts as $post)
    <div class="brand">
      <img src="assets/build/images/tax-the-rich.png" class="logo" alt="{!! $post->heading !!}" title="{!! $post->heading !!}" />
    </div>
    @include('_components.hero')
    @include('_components.context')
    @include('_components.provisions')
  @endforeach
  <script src="https://unpkg.com/netlify-cms@2.9.0/dist/netlify-cms.js"></script>
</body>
</html>
