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
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = downloadLink;
      });
    });
  });