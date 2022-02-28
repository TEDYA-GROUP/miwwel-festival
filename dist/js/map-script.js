function initMap() {
  let map = new google.maps.Map(document.querySelector('.stores-map-container'), {
    center: {
      lat: 49.611621,
      lng: 6.1319346,
    },
    zoom: 10,
    mapId: '85fc3627aa19ce6',
    mapTypeControl: true,
    fullscreenControl: false,
    streetViewControl: true,
    zoomControl: false,
  });

  // Nom du magasin
  // Latitude, Longitude
  // Image URL
  const markerIcon = 'dist/images/pin.png';

  const markers = [
    ['Dorma Home', 49.60131185987513, 6.066899255542257, markerIcon],
    ['Deckerline', 49.49484348782375, 6.0851544267026565, markerIcon],
    ['Tousalon', 49.65255568545306, 6.1281597267084384, markerIcon],
    ['Oeistreicher', 50.051225726961675, 6.072391984394572, markerIcon],
    ['kichechef', 49.639919266659824, 6.012455340200844, markerIcon],
    ['House of confort', 49.62098088996747, 6.068466640200154, markerIcon],
    ['Ameublement Thill', 50.00570187278002, 6.084981097885742, markerIcon],
    ['studio land ', 49.593271288411174, 6.225487969034863, markerIcon],
    ['milch-gillen', 49.59960054966699, 6.122721796020819, markerIcon],

    ['fiisschen concept', 49.88077246207951, 5.990834397881158, markerIcon],
    ['ameublement jean ruhl', 49.479056824794526, 6.08969888437351, markerIcon],
    ['mobel Alvisse', 49.56612798127572, 6.079123269033846, markerIcon],
    [
      'literie kandel bereldange',
      49.65861971945042,
      6.1292878690372365,
      markerIcon,
    ],

    ['literie kandel eish', 49.49745220223424, 5.9859760708812955, markerIcon],

    ['maison du lit', 49.621464073315174, 6.073318855543041, markerIcon],

    [
      'Stoll maitre matelassier',
      49.51506905876679,
      5.970373369031958,
      markerIcon,
    ],
    ['furnimmo', 50.14325572291398, 6.068381497890865, markerIcon],
    ['galerie moderne', 49.676793846608575, 6.440754297873595, markerIcon],
    ['conforama', 49.62271998411247, 6.054183269035912, markerIcon],
    ['lucien schweitzer', 49.605044542369086, 6.129590997871022, markerIcon],
    ['kicheconcept', 49.60143680029903, 6.067801697870852, markerIcon],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
      },
    });

    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });

    // affichage du nom du magasin  par clic sur le marqueur
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
  }
}
