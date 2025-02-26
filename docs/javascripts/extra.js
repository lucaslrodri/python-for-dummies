document.querySelectorAll("a").forEach(function (element) {
    let href = element.getAttribute("href");

    // Check to see if the the href include http:// or https://
    if (href) {
        if (href.includes("https://") || href.includes("http://")) {
            element.target = "_blank"; // Make link open in new tab
            element.rel = "noreferrer nofollow noopener";

            console.log(element); // Just for testing
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cardLinks = document.querySelectorAll('.card-link[data-download]');
  
    cardLinks.forEach(link => {
      const downloadLink = link.getAttribute('data-download');
      
      // Add click event listener to the card link
      link.addEventListener('click', function(event) {
        const rect = link.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position within the element
        const y = event.clientY - rect.top;  // y position within the element

        // Check if the click is within the bounds of the ::after element
        if (x >= rect.width - 50 && y >= 0 && y <= rect.height) { // Adjust 50 to the width of the ::after element
          event.preventDefault();
          window.location.href = downloadLink;
        }
      });
    });
});