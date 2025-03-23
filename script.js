document.getElementById('search-btn').addEventListener('click', function () {
    let query = document.getElementById('search').value;
    if (query.trim() !== "") {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

// Sidebar active link logic
document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.sidebar ul li a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// JavaScript for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
