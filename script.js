const scrollToTop = document.getElementById("scroll-to-top");
const heroSection = document.getElementById("hero");
const nav = document.querySelector(".navigation");

// functions
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollToTop.style.display = "inline-block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", (e) => {
  e.preventDefault();

  const navHeight = nav.offsetHeight;
  const heroTop = heroSection.offsetTop;

  window.scrollTo({
    top: heroTop - navHeight,
    behavior: "smooth",
  });
});
