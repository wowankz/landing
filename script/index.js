

document.addEventListener('DOMContentLoaded', function () {
    const modal_cookie = document.querySelector('.modal-cookie');
    modal_cookie.style.transform = 'scale(1)'
    modal_cookie.addEventListener('click', (event) => {
        if (event.target.id === 'close-cookie') {
            console.log(event.target);
            modal_cookie.style.transform = 'scale(0)'
        }
    });

    const howWork = document.querySelector('.how-work__cards');
    const howWorkItems = howWork.querySelectorAll('.how-work__cards-item');
    const howWorkTabs = document.querySelectorAll('.how-work__tab');
    document.addEventListener('scroll', () => {
        const box = howWork.getBoundingClientRect()
        for (const item of howWorkItems) {
            item.classList.remove('active')
        }
        for (const item of howWorkTabs) {
            item.classList.remove('how-work__tab_active')
        }

        if (box.top > -109) {
            howWorkItems[0].classList.add('active')
            howWorkTabs[0].classList.add('how-work__tab_active')
        } else if (box.top > -372) {
            howWorkTabs[1].classList.add('how-work__tab_active')
            howWorkItems[1].classList.add('active')
        } else if (box.top > -640) {
            howWorkTabs[2].classList.add('how-work__tab_active')
            howWorkItems[2].classList.add('active')
        } else if (box.top > -908) {
            howWorkTabs[3].classList.add('how-work__tab_active')
            howWorkItems[3].classList.add('active')
        } else if (box.top > -1176) {
            howWorkTabs[4].classList.add('how-work__tab_active')
            howWorkItems[4].classList.add('active')
        } else if (box.top > -1444) {
            howWorkTabs[5].classList.add('how-work__tab_active')
            howWorkItems[5].classList.add('active')
        } else if (box.top > -1712) {
            howWorkTabs[6].classList.add('how-work__tab_active')
            howWorkItems[6].classList.add('active')
        };
    })
})