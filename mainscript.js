
// Function for showing pages

// function showPages(pageId, className) {



       
//     const containers = document.querySelectorAll('.container');
//     containers.forEach(container => container.classList.remove("show"));

//     document.querySelector(`.${pageId}`).classList.add("show");
// }


// 

window.addEventListener('scroll', function() {
    const header = document.querySelector('.nav-container');
    if (window.scrollY > 120) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

