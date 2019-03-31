@foreach($posts as $post)
  <h1>{!! $post->post_title !!}</h1>
  {!! $post->post_content !!}
@endforeach