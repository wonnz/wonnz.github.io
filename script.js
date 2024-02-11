const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click',()=>{
     nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click',()=>{
     nav.classList.remove('active');
    })
}
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You should perform additional validation here if needed

        // Simulate authentication (replace with actual authentication logic)
        if (username === 'example' && password === 'password') {
            // Redirect to the main application page after successful login
            window.location.href = 'main.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

