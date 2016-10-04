(function () {

  console.log('logout sanity check!');

  $('#logout').on('click', (event) => {
      event.preventDefault();

      console.log('in logout');

      //PUT request with payload for server
      $.ajax({
        type: 'GET',
        url: '/users/user/logout'
      })
      .done((data) => {
        sessionStorage.clear();
        window.location.href = '/';
      });
    });
})();
