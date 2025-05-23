    let workHeading = document.querySelector(".work-heading");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        workHeading.classList.add("work-heading-top-5");
        workHeading.classList.add("border-t");
    } else {
        workHeading.classList.remove("work-heading-top-5");
        workHeading.classList.remove("border-t");
    }
    }