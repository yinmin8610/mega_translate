"use strict";

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 992) {
    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(function (element) {
      // console.log(element);
      element.addEventListener('click', function (e) {
        var nextEl = element.nextElementSibling;

        if (nextEl && nextEl.classList.contains('submenu')) {
          e.preventDefault();
          e.stopPropagation(); // 如果點擊時「選單是開啟的」，那就把它關掉

          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }
        }
      });
    });
  }
});
//# sourceMappingURL=all.js.map
