
const ASIDE = document.querySelectorAll('.aside li');
const SECTION = document.querySelectorAll('.section');

new fullpage('#main', {
    anchors: ['p01', 'p02', 'p03', 'footer'],
    css3: false,

    afterLoad: function (origin, destination, direction, trigger) {
        console.log(destination.index, ASIDE[destination.index]);
        ASIDE.forEach(it => it.classList.remove('on'));
        ASIDE[destination.index].classList.add('on');
        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');
    },
});