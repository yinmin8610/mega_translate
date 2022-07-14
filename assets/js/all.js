"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(function (element) {
    console.log(element);
    element.addEventListener('click', function (e) {
      var nextEl = element.nextElementSibling;
      var parentEl = element.parentElement;
      var allSubmenus_array = parentEl.querySelectorAll('.submenu');

      if (nextEl && nextEl.classList.contains('submenu')) {
        e.preventDefault();
        event.stopPropagation();

        if (nextEl.style.display == 'block') {
          nextEl.style.display = 'none';
        } else {
          nextEl.style.display = 'block';
        }
      }
    });
  });
});
//# sourceMappingURL=all.js.map
