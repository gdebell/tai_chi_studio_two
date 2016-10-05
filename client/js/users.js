(function () {
    $('#saveUserButton').on('click', (event) => {
      event.preventDefault();
      const userPayload = {
        email: $('#email').val(),
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        address_line_1: $('#line_1').val(),
        address_line_2: $('#line_2').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip: $('#zip').val(),
        liability: true,
        comments: $('#comments').val(),
        password: $('#inputPassword').val(),
        is_admin: $('#input_is_admin').val()
      };
      //PUT request with payload for server
      $.ajax({
        type: 'POST',
        url: '/users/signup',
        data: userPayload
      })
      .done((data) => {
        console.log('here is the return data: ', data);
        sessionStorage.setItem('email', userPayload.email);
        sessionStorage.setItem('first_name', userPayload.first_name);
        sessionStorage.setItem('id', data.results[0]);
        sessionStorage.setItem('is_admin', data.results[0]);
        window.location.href = '/';
      })
      .fail((err) => {
        $('.validation').append(JSON.parse(err.responseText).message);
        console.log(err);
      });

    });
  })();
