$(document).on('click', '.delete_class', function() {
  const answer = confirm('Are you sure? This can\'t be undone');

  if (answer) {
    const classID = $(this).attr('data-id');
    $.ajax({
      type: 'DELETE',
      url: `/classes/${classID}/class/delete`
    })
    .done((data) => {
      window.location.href = '/classes';
    })
    .fail((err) => {
      console.log(err);
    });
  }
});

$(document).on('click', '.delete-instructor', function() {
  const answer = confirm('Are you sure? This can\'t be undone');
  if (answer) {
    let tempId = document.getElementById('deleteId');
    const id = parseInt(tempId.value);
    $.ajax({
      type: 'DELETE',
      url: `/instructors/${id}`
    })
    .done((data) => {
      window.location.href = '/instructors';
    })
    .fail((err) => {
      console.log(err);
    });
  }
});

$('.add_user_to_class').on('click', function(e) {
  e.preventDefault();
  //console.log('You clicked the add a user button!!!');
  const classID = $(this).attr('data-id');
  //console.log('The class number is ', classID);
  const payload = {
    class_id: classID
  };
  $.ajax({
    type: 'POST',
    data: payload,
    url: `/classes/class/addUserToClass`
  })
  .done((data) => {
    console.log('INTHEDONEDATACLICKFUNCTION');
    console.log(data);
    $('.alertuser').append('<p>You must be logged in to sign up for a class</p>');
  })
  .fail((err) => {
    console.log(err);
  });
});

$('.delete-user').on('click', function(e) {
  e.preventDefault();
  const userID = $(this).attr('data-id');
  console.log('You clicked on user ', userID);
  const classID = $('#single_class_id').val();
  console.log('This is class number ', classID);
  const removeUser = {
    user_id: userID,
    classes_id: classID
  };
  $.ajax({
    type: 'DELETE',
    data: removeUser,
    url: `/classes/${classID}/class/delete/user`
  })
  .done((data) => {
    window.location.href = `/classes/${classID}/class`;
  })
  .fail((err) => {
    console.log(err);
  });
});

$(document).on('click', '.edit-instructor', function() {
  let tempId = document.getElementById('editId');
  const id = parseInt(tempId.value);
  window.location.href = '/instructors/edit/' + id + '';
});

$('#edit_class_func').on('click', function(e) {
  e.preventDefault();
  console.log('I am in my edit class function!!!');
  const updatedClassName = $('#class_name option:selected').text();
  const updatedInstructor = $('#instructor option:selected').text();
  const updatedDay = $('#day option:selected').text();
  const updatedStart_time = $('#start_time option:selected').text();
  const updatedEnd_time = $('#end_time option:selected').text();
  const updatedSize = $('#size option:selected').text();
  const updatedDescription = $('#description option:selected').text();
  const id = $('#id').attr('value');
  console.log(id);
  console.log(`classes/${id}/class/edit`);
  const update = {
    name: updatedClassName,
    description: updatedDescription,
    instructor_id: updatedInstructor,
    day: updatedDay,
    start_time: updatedStart_time,
    end_time: updatedEnd_time,
    size: updatedSize
  };
  $.ajax({
    type: 'POST',
    url: `/classes/${id}/edit`,
    data: update
  })
  .done((data) => {
    window.location.href = `/classes/${id}/class`;
  })
  .fail((err) => {
    console.log(err);
  });
});
