// $(document).on('ready', function(event) {
//
//   console.log('on the load of sign in user');
//
//   $('#editUserProfile').on('click', (event) => {
//     event.preventDefault();
//
//     console.log('here I am in the local javascript for EDIT USER');
//
//     //PUT request with payload for server
//     $.ajax({
//       type: 'GET',
//       url: '/user/user_edit_profile'
//     })
//     .done((data) => {
//       //reload page to show updates
//       //location.reload();
//       console.log('data: ', data);
//       // sessionStorage.setItem('email', $('#email').text());
//       // sessionStorage.setItem('first_name', $('#firstName').text());
//       // sessionStorage.setItem('id', $('#user_id').text());
//       console.log('updated and back to the local jquery');
//     })
//     .fail((error) => {
//       console.log(error);
//     });
//   });
// });
