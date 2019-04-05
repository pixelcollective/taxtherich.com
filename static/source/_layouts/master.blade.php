<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="{{ mix('css/app.css', 'assets/build') }}">
    <title>Admin | {{ $page->site->title }}</title>
</head>
<body>
    @yield('content')
    <script src="{{ mix('js/app.js', 'assets/build') }}"></script>
    <script src="https://actionnetwork.org/widgets/v3/petition/add-your-name-tax-the-rich?format=js&source=widget"></script>
</body>
</html>
