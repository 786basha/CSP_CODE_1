let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 0, lng: 0 },
		zoom: 15,
	});

	if ("geolocation" in navigator) {
		navigator.geolocation.watchPosition((position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;

			const pos = {
				lat: latitude,
				lng: longitude,
			};

			map.setCenter(pos);

			const marker = new google.maps.Marker({
				position: pos,
				map: map,
			});
		});
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}
