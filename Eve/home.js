

let attheader = document.getElementById("att");
attheader.textContent = "about the project";

let contactHeader = document.getElementById("contact");
contactHeader.textContent = "Contact us";


let homePage_intro= document.getElementById("homePage_intro");
homePage_intro.textContent = "accessable education";

let hp_text = document.getElementById("homePage_text");
hp_text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";


let aboutThisProject= document.getElementById("aboutThisProject");
aboutThisProject.textContent = "ABOUT THE PROJECT";

let contact_us= document.getElementById("contact_us");
contact_us.textContent = "CONTACT US";

let descriptionOfProject1 = document.getElementById("descriptionOfProject1");
descriptionOfProject1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

let descriptionOfProject2 = document.getElementById("descriptionOfProject2");
descriptionOfProject2.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";

let contact_text = document.getElementById("contact_text");
contact_text.textContent = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur";

let colleges= document.getElementById("colleges");
uni.textContent = "colleges";

let courses= document.getElementById("courses");
uni.textContent = "courses";

let uni= document.getElementById("uni");
uni.textContent = "universities";

let immigrants= document.getElementById("immigrants");
immigrants.textContent = "information for immigrants";




let footerText = document.getElementById("footerText");
footerText.textContent = "SYNOPTIC PROJECT. GROUP22 (c)";




document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var formData = new FormData(contactForm);
  
      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(function(data) {
        // Handle success response
        console.log(data);
        contactForm.reset();
        alert('Thank you for your submission!');
      })
      .catch(function(error) {
        // Handle error
        console.error(error);
        alert('Oops! Something went wrong. Please try again later.');
      });
    });
  });