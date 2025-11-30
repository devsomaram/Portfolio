// jQuery=========================>
  // for navigation=========>
$(document).ready(function(){
  $("#menu-icon").on('click', function(){
    $(".menu-slider-wrapper").addClass("menu-slider-wrapper-open");
     $(".logo").css("visibility", "hidden");
    $("#menu-icon img").css("visibility", "hidden"); 
  });

  $("#slider-close").on('click', function(){
    $(".menu-slider-wrapper").removeClass("menu-slider-wrapper-open").css("transition","0.5s ease");
    $(".logo").css("visibility", "visible");
     $("#menu-icon img").css("visibility", "visible");
  });

  // download cv============================>

  $("#download‑cv").on('click', function(e){
    console.log("Download CV link clicked");
  });
});

// Banner text animation=====================>
const  text = "Soma Ram";
      let i = 0;
      const speed = 100;

      function typeWriter(){
        if(i<text.length){
          document.getElementById("typing").innerHTML += text .charAt(i);
          i++;
          setTimeout(typeWriter , speed);
        }
      }
      window.onload = typeWriter;


// skill section show in mobile screen===================>
    $(document).ready(function(){
  $('.faq-card .faq-header').on('click', function(){
    $(this).next('.faq-content').slideToggle(300);
    $(this).toggleClass('open');
  });
  });

  // Contact form =========================>
    document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const statusDiv = document.getElementById("formStatus");
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    // Clear previous errors/status
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorMessage.textContent = "";
    statusDiv.textContent = "";

    // Basic client-side validation
    let hasError = false;
    if (!form.name.value.trim()) {
      errorName.textContent = "Please enter your name.";
      hasError = true;
    }
    if (!form.email.value.trim()) {
      errorEmail.textContent = "Please enter your email.";
      hasError = true;
    } else {
      // simple email regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(form.email.value.trim())) {
        errorEmail.textContent = "Please enter a valid email address.";
        hasError = true;
      }
    }
    if (!form.message.value.trim()) {
      errorMessage.textContent = "Please enter your message.";
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Prepare form data
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        statusDiv.style.color = "#39D685"; // success colour
        statusDiv.textContent = "Thanks! Your message has been sent.";
      } else {
        const data = await response.json();
        statusDiv.style.color = "#E53E3E"; // error colour
        if (data.errors) {
          statusDiv.textContent = data.errors.map(err => err.message).join(", ");
        } else {
          statusDiv.textContent = "Oops! There was a problem submitting your form.";
        }
      }
    } catch (error) {
      statusDiv.style.color = "#E53E3E";
      statusDiv.textContent = "Oops! There was a network error.";
    }
  });
});