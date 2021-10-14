let modal_cookie = null;
let timer = null;
let tabs = null;
let howWorkItems = null;
let howWorkTabs = null;
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

function setTimeLineActive(index = 0) {
    for (const item of howWorkItems) {
        item.classList.remove('active')
    }
    for (const item of howWorkTabs) {
        item.classList.remove('how-work__tab_active')
    }
    howWorkItems[index].classList.add('active')
    howWorkTabs[index].classList.add('how-work__tab_active')
}

function setDaleyScrollTab(position) {
    clearTimeout(timer)
    timer = setTimeout(() => {
        tabs.scrollLeft = position;
    }, 50)
}

function init() {
    showModalCookie();
    tabs = document.querySelector('.how-work__tabs');
    const howWork = document.querySelector('.how-work__cards');
    howWorkItems = howWork.querySelectorAll('.how-work__cards-item');
    howWorkTabs = document.querySelectorAll('.how-work__tab');

    document.addEventListener('scroll', () => {
        const box = howWork.getBoundingClientRect()
        const boxTabs = tabs.getBoundingClientRect()

        if (boxTabs.top === -30) {
            //     // Mobile 425 and less
            if (box.top > -158) {
                setTimeLineActive(0)
                setDaleyScrollTab(0)
            } else if (box.top > -349) {
                setTimeLineActive(1)
                setDaleyScrollTab(146);
            } else if (box.top > -559) {
                setTimeLineActive(2)
                setDaleyScrollTab(278);
            } else if (box.top > -750) {
                setTimeLineActive(3)
                setDaleyScrollTab(456);
            } else if (box.top > -940) {
                setTimeLineActive(4)
                setDaleyScrollTab(585);
            } else if (box.top > -1189) {
                setTimeLineActive(5)
                setDaleyScrollTab(733);
            } else if (box.top > -1712) {
                setTimeLineActive(6)
            };
        }

        if (boxTabs.top === -50) {
            // Desktop
            if (box.top > -186) {
                setTimeLineActive(0)
            } else if (box.top > -464) {
                setTimeLineActive(1)
            } else if (box.top > -742) {
                setTimeLineActive(2)
            } else if (box.top > -1020) {
                setTimeLineActive(3)
            } else if (box.top > -1290) {
                setTimeLineActive(4)
            } else if (box.top > -1576) {
                setTimeLineActive(5)
            } else if (box.top > -1712) {
                setTimeLineActive(6)
            };
        }



        //     if (boxTabs.bottom < 85 && boxTabs.bottom > 70) {
        //
        //     }


        // }


    })
}

document.addEventListener('DOMContentLoaded', init)