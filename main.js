var modal = document.querySelector('.modal');
var submitBtn = document.querySelector('.js-submit');
var modalContainer = document.querySelector('.js-contianer');


function closeModal () {
    modal.classList.add('open-modal');
}

function showModal() {
    modal.classList.remove('open-modal');
}

submitBtn.addEventListener('click', showModal);
modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', function(e){
    e.stopPropagation()
})


var switchRegis = document.querySelector('.js-switch-regis');
var switchAuth = document.querySelector('.js-switch-auth');
var regisPage = document.querySelector('.regist-form');
var authPage = document.querySelector('.auth-form');

function pageRegist(){
    regisPage.classList.toggle('switch-page');
    authPage.classList.toggle('switch-page');
}

function pageAuth(){
    regisPage.classList.toggle('switch-page');
    authPage.classList.toggle('switch-page');
}

// switchBtn.onclick = function (e){
//     regisPage.classList.toggle('switch-page');
//     authPage.classList.toggle('switch-page');
// }

switchRegis.addEventListener('click', pageRegist);
switchAuth.addEventListener('click', pageAuth);

// Tab line Tablet & Mobile

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabOptions = $$('.mobile-tablet-sort-bar_option');

// console.log(tabOptions)

const tabOption_active = $('.mobile-tablet-sort-bar_option.active');
const optionLine = $('.option_line__prime');

optionLine.style.left = tabOption_active.offsetLeft + 'px';
optionLine.style.width = tabOption_active.offsetWidth + 'px';

tabOptions.forEach((tabOption, index) => {
    tabOption.onclick = function() {
        $('.mobile-tablet-sort-bar_option.active').classList.remove('active');

        optionLine.style.left = this.offsetLeft + 'px';
        optionLine.style.width = this.offsetWidth + 'px';


        this.classList.add('active');
    }
    
});

// Side Bar Mobile & Tablet
const sidebarClose = $('.side-bar__close-icon');
const sideBar = $('.side-bar');
const sidebarOpen = $('.header-side-bar');

sidebarClose.onclick = function() {
    sideBar.style.animation = 'closeJS linear 0.3s';
    sideBar.style.width = '0';
}

sidebarOpen.onclick = () => {
    sideBar.style.animation = 'FadeIn linear 0.3s';
    sideBar.style.width = '100%';
}

