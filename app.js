(function () {
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var countEl = document.getElementById("count");
  var cartBtn = document.querySelector(".cart");
  var toast = document.getElementById("toast");
  var count = 0;
  var toastTimer;
  function setCount(n) {
    count = n;
    if (countEl) {
      countEl.textContent = String(count);
      countEl.classList.remove("bump");
      void countEl.offsetWidth;
      countEl.classList.add("bump");
    }
    if (cartBtn) cartBtn.setAttribute("aria-label", "Cart, " + count + (count === 1 ? " item" : " items"));
  }
  document.querySelectorAll("[data-add]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setCount(count + 1);
      if (toast) {
        toast.textContent = "Added to cart: " + btn.getAttribute("data-add");
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
      }
    });
  });

  var form = document.getElementById("signup");
  var thanks = document.getElementById("thanks");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]');
      if (!email || !email.value.trim() || !email.checkValidity()) {
        if (email) email.focus();
        return;
      }
      form.reset();
      if (thanks) thanks.hidden = false;
    });
  }
})();
