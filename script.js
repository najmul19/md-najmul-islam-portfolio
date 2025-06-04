var type = new Typed("#typed", {
  strings: [
    "Mern-Stack Web Developer",
    "React Native Developer",
    "Flutter Developer",
    "PHP Developer",
    "Machine Learning Engineer",
  ],
  tupeSpeed: 50,
  backSpeed: 20,
  backDelay: 3000,
  showCursor: false,
  loop: true,
});

// theme

function theme() {
  const darkBtn = document.getElementById("darkBtn");
  const lightBtn = document.getElementById("lightBtn");

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    darkBtn.style.display = "none";
    lightBtn.style.display = "block";
  } else {
    darkBtn.style.display = "block";
    lightBtn.style.display = "none";
  }
}

// menue toggle
const menuItems = document.querySelectorAll(".nav .item");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// read more option toggle
function toggleReadMore(btn) {
  const moreText = btn.previousElementSibling;
  const dots = moreText.previousElementSibling;

  const isExpanded =
    moreText.style.display === "inline" || moreText.style.display === "block";

  if (isExpanded) {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.innerText = "Read more";
  } else {
    moreText.style.display = "inline"; // or "block" if you prefer
    dots.style.display = "none";
    btn.innerText = "Read less";
  }
}
