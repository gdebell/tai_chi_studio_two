$(document).ready(function () {
  $.ajax ({
    url:'//fortunecookieapi.com/v1/fortunes?limit=&skip=&page=' + Math.floor(Math.random() * 6),
    method: 'GET',
    data: 'json'
  })
  .done ((data) => {
    const length = data.length;
    const num = Math.floor(Math.random() * length);
    const fortune = data['' + num].message;
    $('div.hidden').fadeIn('slow').removeClass('hidden');
    $('#fortune').append('<p>' + fortune + '</p>');
  })
  .fail((err) => {
    console.log(err);
  });
});
