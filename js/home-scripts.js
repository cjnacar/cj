//For auto close 
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav-list a');
 
  links.forEach(function (link) {
     link.addEventListener('click', function () {
       document.getElementById('nav-check').checked = false;
     });
  });
 });


//circle's randomness
document.addEventListener("DOMContentLoaded", function() {
    const numCircles = 20; // Number of circles to generate

    for (let i = 0; i < numCircles; i++) {
        createCircle();
    }

    function createCircle() {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Randomize position
        const randomLeft = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 5; 

        circle.style.left = randomLeft + "px";
        circle.style.animationDelay = randomDelay + "s";

        // Append to contact section
        document.querySelector(".contact").appendChild(circle);
    }
});

//loading line
document.addEventListener('DOMContentLoaded', function() {
  const logoutLink = document.querySelector('a[href="sign-in.html"]');
  const loadingLine = document.getElementById('loading-line');

  if (logoutLink) {
    logoutLink.addEventListener('click', function(event) {
      event.preventDefault();
      loadingLine.style.display = 'block';
      loadingLine.style.width = '100%';

      // Redirect to sign-in page after the animation is complete
      setTimeout(function() {
        window.location.href = 'sign-in.html';
      }, 2000); // Adjust the timeout to match the CSS transition duration
    });
  }
});




