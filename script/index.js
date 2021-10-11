let modal_cookie = null;

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function closeModalCookie() {
    modal_cookie.style.transform = 'scale(0)';
    setTimeout(() => { modal_cookie.remove(); }, 500)


}

function getHtmlModalCookie() {
    return `
    <div class="modal-cookie">
        <img id="close-cookie" src="./img/modal-close-icon.svg" alt="Close icon" class="modal-cookie__close">
        <p class="modal-cookie__text">
            We use cookies to improve your experience and for marketing. Learn more in our cookie policy.
        </p>
        <div class="modal-cookie__buttons">
            <button id="manage-cookie" class="modal-cookie__button-manage">Manage cookies</button>
            <button id="accept-all" class="modal-cookie__button-accept">Accept All</button>
        </div>
    </div>
  `
}

function showModalCookie() {
    document.querySelector('body').insertAdjacentHTML('beforeend', getHtmlModalCookie());
    modal_cookie = document.querySelector('.modal-cookie');
    setTimeout(() => {
        if (!getCookie('visit'))
            modal_cookie.style.transform = 'scale(1)'
    }, 1000)

    modal_cookie.addEventListener('click', (event) => {
        if (event.target.id === 'close-cookie') {
            console.log(event.target);
            closeModalCookie()
        }

        if (event.target.id == 'accept-all') {
            console.log('Accept all cookie');
            document.cookie = 'visit=true; path=/;max-age=60';
            closeModalCookie();
        }

        if (event.target.id === 'manage-cookie') {
            const modal_manage = document.querySelector('.modal-manage');
            closeModalCookie();
            modal_manage.classList.add('modal_show');
            modal_manage.addEventListener('click', (event) => {
                if (event.target.classList.contains('modal-manage__info-btn')) {
                    event.target.parentElement.classList.toggle('modal-manage__info_open');
                    event.target.innerHTML = event.target.parentElement.classList.contains('modal-manage__info_open')
                        ? 'Nasconi'
                        : 'Scopri di piu';

                }

                if (event.target.classList.contains('modal-btn__close')) {
                    console.log('close');
                    modal_manage.classList.remove('modal_show');
                    setTimeout(() => { showModalCookie(); }, 300)
                }

                if (event.target.classList.contains('modal-manage__info-check')) {
                    const checks = modal_manage.querySelectorAll('.modal-manage__info-input');
                    const checked_cookie = [];
                    const btn_selected_cookie = modal_manage.querySelector('#selected_cookie')
                    setTimeout(() => {
                        for (let item of checks) {
                            if (item.checked) checked_cookie.push(item);
                        }
                        if (checked_cookie.length <= 0) {
                            btn_selected_cookie.classList.add('modal-btn_disabled')
                        } else {
                            btn_selected_cookie.classList.remove('modal-btn_disabled')
                        }
                    }, 0)

                }
                if (event.target.classList.contains('modal-btn')) {
                    switch (event.target.id) {
                        case 'all_cookie':
                            console.log('Set all cookie');
                            modal_manage.classList.remove('modal_show');
                            break;
                        case 'selected_cookie':
                            console.log('Set selected cookie');
                            modal_manage.classList.remove('modal_show');
                            break;
                    }
                }

            })
        }
    });
}

function init() {
    showModalCookie();
    const howWork = document.querySelector('.how-work__cards');
    const howWorkItems = howWork.querySelectorAll('.how-work__cards-item');
    const howWorkTabs = document.querySelectorAll('.how-work__tab');
    document.addEventListener('scroll', () => {
        const box = howWork.getBoundingClientRect()
        // console.log(box);
        for (const item of howWorkItems) {
            item.classList.remove('active')
        }
        for (const item of howWorkTabs) {
            item.classList.remove('how-work__tab_active')
        }

        if (box.height > 1448) {
            // Desktop
            if (box.top > -186) {
                howWorkItems[0].classList.add('active')
                howWorkTabs[0].classList.add('how-work__tab_active')
            } else if (box.top > -464) {
                howWorkTabs[1].classList.add('how-work__tab_active')
                howWorkItems[1].classList.add('active')
            } else if (box.top > -742) {
                howWorkTabs[2].classList.add('how-work__tab_active')
                howWorkItems[2].classList.add('active')
            } else if (box.top > -1020) {
                howWorkTabs[3].classList.add('how-work__tab_active')
                howWorkItems[3].classList.add('active')
            } else if (box.top > -1290) {
                howWorkTabs[4].classList.add('how-work__tab_active')
                howWorkItems[4].classList.add('active')
            } else if (box.top > -1576) {
                howWorkTabs[5].classList.add('how-work__tab_active')
                howWorkItems[5].classList.add('active')
            } else if (box.top > -1712) {
                howWorkTabs[6].classList.add('how-work__tab_active')
                howWorkItems[6].classList.add('active')
            };
        } else {
            // Mobile 425 and less
            if (box.top > -158) {
                howWorkItems[0].classList.add('active')
                howWorkTabs[0].classList.add('how-work__tab_active')
            } else if (box.top > -349) {
                howWorkTabs[1].classList.add('how-work__tab_active')
                howWorkItems[1].classList.add('active')
            } else if (box.top > -559) {
                howWorkTabs[2].classList.add('how-work__tab_active')
                howWorkItems[2].classList.add('active')
            } else if (box.top > -750) {
                howWorkTabs[3].classList.add('how-work__tab_active')
                howWorkItems[3].classList.add('active')
            } else if (box.top > -940) {
                howWorkTabs[4].classList.add('how-work__tab_active')
                howWorkItems[4].classList.add('active')
            } else if (box.top > -1189) {
                howWorkTabs[5].classList.add('how-work__tab_active')
                howWorkItems[5].classList.add('active')
            } else if (box.top > -1712) {
                howWorkTabs[6].classList.add('how-work__tab_active')
                howWorkItems[6].classList.add('active')
            };
        }


    })
}

document.addEventListener('DOMContentLoaded', init)