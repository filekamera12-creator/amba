/* ================= TOMBOL KEMBALI KE ATAS ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* ================= NAVBAR MOBILE ================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarMenu = document.getElementById("navbarMenu");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarMenu);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });
});

/* ================= ACTIVE NAVBAR ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
