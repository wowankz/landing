

document.addEventListener('DOMContentLoaded', function () {
    const modal_cookie = document.querySelector('.modal-cookie');
    modal_cookie.style.transform = 'scale(1)'
    modal_cookie.addEventListener('click', (event) => {
        if (event.target.id === 'close-cookie') {
            console.log(event.target);
            modal_cookie.style.transform = 'scale(0)'
        }
    });
    console.log('load');
})