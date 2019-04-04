<div class="context font-sans">
  <div class="container">
    <h2 class="salutations">{!! $app->heading !!}</h2>
    <div>{!! $app->content !!}</div>
    <ul>
      <li>@emoji('white_check_mark') {!! $app->list_item_one !!}</li>
      <li>@emoji('white_check_mark') {!! $app->list_item_two !!}</li>
      <li>@emoji('white_check_mark') {!! $app->list_item_three !!}</li>
    </ul>
  </div>
</div>