 document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && acceptBtn && declineBtn) {
      if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
        cookieBanner.style.display = "flex";
      }

      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
      });

      declineBtn.addEventListener("click", function () {
        localStorage.setItem("cookiesDeclined", "true");
        cookieBanner.style.display = "none";
      });
    }

    const toggleBtn = document.getElementById("menu-toggle");
    const navbarCollapse = document.getElementById("navbarCollapse");

    if (toggleBtn && navbarCollapse) {
      toggleBtn.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
        toggleBtn.setAttribute(
          "aria-expanded",
          navbarCollapse.classList.contains("show") ? "true" : "false"
        );
      });
    }
  });

