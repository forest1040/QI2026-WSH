/* Quantum Programming with Japanese Quantum Computers — site behaviour */
(function () {
  "use strict";

  /* --- Mobile navigation ------------------------------------------------ */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.getAttribute("data-open") === "true";
      links.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });

    /* Close after choosing a destination on small screens */
    links.addEventListener("click", function (event) {
      if (event.target.closest("a") && window.matchMedia("(max-width: 900px)").matches) {
        links.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    /* Reset state when returning to desktop widths */
    window.matchMedia("(min-width: 901px)").addEventListener("change", function (event) {
      if (event.matches) {
        links.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* --- Highlight the section currently in view -------------------------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav__links a[href^="#"]')
  );
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            var isCurrent = link.getAttribute("href") === "#" + entry.target.id;
            if (isCurrent) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* --- Keep the copyright year current ---------------------------------- */
  var year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
