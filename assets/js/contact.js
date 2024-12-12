jQuery(document).ready(function() {
  // Contact Form Submission
  jQuery('#contact-form').on('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    const serviceID = 'service_yrgq6zh'; // Replace with your EmailJS Service ID
    const templateID = 'template_durq1wq'; // Replace with your EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(function(response) {
        swal({
          title: "Thank You!",
          text: "Your request has been submitted successfully. We will contact you soon.",
          icon: "success",
          timer: 3000
        }).then(function() {
          jQuery('#contact-form')[0].reset(); // Reset the form
        });
      }, function(error) {
        console.log(error)
        swal({
          title: "Oops...",
          text: "Something went wrong :(",
          icon: "error",
          timer: 3000
        });
      });
  });

  // Subscription Form Submission
  jQuery('#subscribe-form').on('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    const serviceID = 'service_yrgq6zh'; // Replace with your EmailJS Service ID
    const templateID = 'template_durq1wq'; // Replace with your EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(function(response) {
        swal({
          title: "Thank You!",
          text: "Your subscription request has been submitted successfully.",
          icon: "success",
          timer: 3000
        }).then(function() {
          jQuery('#subscribe-form')[0].reset(); // Reset the form
        });
      }, function(error) {
        swal({
          title: "Oops...",
          text: "Something went wrong :(",
          icon: "error",
          timer: 3000
        });
      });
  });
});
