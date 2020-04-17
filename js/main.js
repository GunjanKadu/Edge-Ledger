function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 14,
  });
  const marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  });
}
