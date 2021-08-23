const modal_policy = document.querySelector('.modal-policy');
const btn_policy = document.querySelector('.accept__link');
const btn_close = document.querySelector('.modal-btn__close')

btn_policy.addEventListener('click', () => {
    modal_policy.style.display = 'block';
    setTimeout(() => { modal_policy.style.transform = 'scale(1)'; }, 300)

})

btn_close.addEventListener('click', () => {
    modal_policy.style.transform = 'scale(0)';
    setTimeout(() => { modal_policy.style.display = 'none'; }, 300)

})