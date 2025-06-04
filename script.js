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

function theme(){
    const darkBtn = document.getElementById("darkBtn");
    const lightBtn = document.getElementById("lightBtn");

    document.body.classList.toggle('light');

    if(document.body.classList.contains("light")){
        
        darkBtn.style.display="none";
        lightBtn.style.display="block";
    } else {
        darkBtn.style.display="block";
        lightBtn.style.display="none";
    }
}