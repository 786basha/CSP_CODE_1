
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'hi,te,ur,ml' }, 'translated-text');
  }
  

// Add smooth scrolling to all links
$('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
 
       // Prevent default anchor click behavior
       event.preventDefault();
 
       // Store hash
       var hash = this.hash;
 
       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
          scrollTop: $(hash).offset().top
       }, 800, function(){
 
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
       });
    }
 });
 




 const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');

	burger.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
}

navSlide();

// =========================
// contact page

const form = document.getElementById("contact-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const data = {
    name,
    email,
    phone,
    message,
  };

  console.log(data); // replace with your own code to submit the form
}


// +++++++++++++++++++++++++++

// // Load the Places library
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.866, lng: 151.196},
    zoom: 15
  });
  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

//   // Use the Nearby Search API to find nearby healthcare centers
  service.nearbySearch({
    location: {lat: -33.866, lng: 151.196},
    radius: 5000,
    type: ['health']
  }, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  });

//   // Create a marker for each healthcare center found and display its information when clicked
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Address: ' + place.vicinity + '<br>' +
        'Phone: ' + place.formatted_phone_number + '</div>');
      infowindow.open(map, this);
    });
  }
}

function home1(){
  window.location.href='/index.html';
}

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 