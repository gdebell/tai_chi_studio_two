/* globals google */
function initMap() {
  var uluru = {lat: 39.733711, lng: -104.992556};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
