(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

//NK resto view
$(document).ready(function(){
        $(".image-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    });

    if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister().then(() => {
        console.log('Service Worker unregistered:', registration);
      });
    }
  });
}

//booking js

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop normal form submission

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let datetime = document.getElementById("datetime").value.trim();
    let people = document.getElementById("select1").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !datetime || !people) {
        alert("Please fill in all required fields before booking.");
        return;
    }

    // Optional: Email format check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Your WhatsApp number (with country code, no + or spaces)
    let phoneNumber = "256701155969"; 

    // Create the message
    let whatsappMessage = 
`Reservation Request:
Name: ${name}
Email: ${email}
Date & Time: ${datetime}
No. of People: ${people}
Special Request: ${message || "None"}`;

    // Encode for URL
    let encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
});

const floatingButtons = document.querySelectorAll('.icon-btn');

floatingButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault(); // prevent jump on mobile
        // Remove active from other buttons
        floatingButtons.forEach(b => { if(b !== btn) b.classList.remove('active'); });
        // Toggle active on this button
        btn.classList.toggle('active');
    });
});



