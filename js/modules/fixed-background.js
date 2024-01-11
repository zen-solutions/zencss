/*
 * zenCSS v2.2.0-beta (https://zencss.com/)
 * Copyright 2022-2024 Shaun Mackey
 * Licensed under MIT (https://github.com/zen-solutions/zencss/blob/main/LICENSE)
 */

document.addEventListener('DOMContentLoaded', function () {
    var fixedBgElems = document.querySelectorAll('.fixed-background');

    fixedBgElems.forEach(function (elem) {
        var img = elem.querySelector('img');
        if (img && img.src) {
            elem.style.backgroundImage = 'url(' + img.src + ')';
            elem.style.backgroundAttachment = 'fixed';
            elem.style.backgroundPosition = 'center';
            elem.style.backgroundRepeat = 'no-repeat';
            elem.style.backgroundSize = 'cover';
        }
    });
});