(function () {

  console.log('manage user sessions');
  console.log('session: ', sessionStorage.getItem('first_name'));

  if ((sessionStorage.getItem('id') > -1) && (sessionStorage.getItem('first_name') !== null))  {
    $('#loginLink > a').replaceWith('<li class="current-menu-item" id="loginLink"><a href="/users/viewuser">' + sessionStorage.getItem('first_name') + '</a></li>');
  } else {
    $('#loginLink > a').replaceWith('<li class="current-menu-item" id="loginLink"><a href="/users/signin">Log In</a></li>');
  }

})();
