function initMap() {
    var location= {lat: 8.467403, lng: 76.948431};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }