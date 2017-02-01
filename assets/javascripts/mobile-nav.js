// ----------
//
// mobile-nav
//
// Script to toggle the site nav on small screens
//
// ----------

( function() {

    'use strict';

    var trigger, menu;

    trigger = document.querySelector('.js-mobile-nav-trigger');
    menu = document.querySelector('.js-mobile-nav-container');

    trigger.addEventListener('click', function() {
        menu.classList.toggle('is-toggled');
    });

} )();
