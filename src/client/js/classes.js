$(document).on('ready', () => {
    console.log('connected to classes.js');
    function appendSchedule($id, $className) {
      $($id).appendTo($($className));
    }
    function secretary(meridian) {
      for (let i = 1; i < 12; i++) {
        if (i >= 10) {
          appendSchedule($('.' + i + '00' + meridian), $('#' + i + '00' + meridian));
        }
        else {
          appendSchedule($('.0' + i + '00' + meridian), $('#0' + i + '00' + meridian));
        }
      }
    }
    function filterDay(dayAbbrev, day) {
      $('.' + dayAbbrev).on('click', function() {
        if ($('.weekDayHeader').data('clicked', true)) {
          $('.classBlock').fadeOut('slow').css('display', 'none');
          $('.' + day).fadeIn('slow').css('display', 'block');
          // $('weekDayHeader').fadeOut('slow').css('background-color', '#f2f2f2');
          // $('.' + dayAbbrev).fadeIn('slow').css('background-color', '#dbdbdb');
        }
        else {
          $('.' + day).fadeIn('slow').css('display', 'block');
        }
      });
    }

    filterDay('mon', 'Monday');
    filterDay('tues', 'Tuesday');
    filterDay('wed', 'Wednesday');
    filterDay('thurs', 'Thursday');
    filterDay('fri', 'Friday');
    //no longer friends these two functions mehhehe
    secretary('am');
    secretary('pm');
  });
