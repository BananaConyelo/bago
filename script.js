
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});

// LOGIN 
document.getElementById('user-icon').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
});
