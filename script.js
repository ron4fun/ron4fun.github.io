
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    // Check if user is at the bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});



function showSidebar(event){
    if (event) event.preventDefault();
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
    menu.style.opacity = '0';
    close.style.opacity = '1';
};

function hideSidebar(event){
    if (event) event.preventDefault();
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    close.style.opacity = '0';
    menu.style.opacity = '1';

};

function notOnGit(event) {
    if (event) event.preventDefault();
    alert("This project was not featured on GitHub Pages. Please visit the website form 'View Project'.");
}


const currentYear = new Date().getFullYear();
document.getElementById('currentDate').textContent = currentYear;