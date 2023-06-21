
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






