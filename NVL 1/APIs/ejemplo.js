function initMap() {
	var pos;
	var map = new google.maps.Map(document.getElementById('map'),
	{
		center:{lat: 40.7127837, lng: -74.00594130000002},
		zoom:15
	});

	var infoWindow = new google.maps.InfoWindow({map:map})
	//Intentando geolocalizar en HTML5

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			var posicion={
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};
			var marker = new google.maps.Maker({
				position:posicion,
				map: map,
				tittle : 'tu estas aqui'
			});

			infoWindow.setPosition(posicion);
			infoWindow.setContent('Tu esas aqui');
			map.setCenter(posicion);

			}, function(){
				handleLocationError(true,infoWindow,map.getCenter());
			});
	}
	else{
		//Navegador no soporta  la geolocalizacion
		handleLocationError(false, infoWindow, map.getCenter());
	}
}