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

// ---------------------
// Project Modal Functionality

// // Open modal when project is clicked

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll("[data-project]");
  const modal = document.getElementById("projectModal");
  const closeModal = document.querySelector(".close-modal");
  const githubLink = document.getElementById("githubLink");
  const youtubeOption = document.getElementById("youtubeOption");
  const youtubeContainer = document.getElementById("youtubeContainer");
  const youtubeIframe = document.getElementById("youtubeIframe");

  const titleElement = document.getElementById("projectTitle");
  const descriptionElement = document.getElementById("projectDescription");

  const projectData = {
    project1: {
      title: "KgabarKuri - Food Delivery Restuarant App",
      github: "https://github.com/najmul19/KhabarKuri.git",
      youtube: "https://youtu.be/K2B6807EWj4",
      description:
        "Khabar Kuri – Full-Stack Food Ordering App with Stripe, JWT, Realtime Updates | MERN Stack Project",
    },
    project2: {
      title: "WebVers - Task Management System",
      github: "https://github.com/najmul19/WebVers-PHP.git",
      youtube: "https://youtu.be/cipymO350F8",
      description: "A PHP-based task management system for IT companies.",
    },
    project3: {
      title: "Bangladesh 2.0",
      github: "https://github.com/najmul19/Bangladesh_2.0-Firebase.git",
      youtube: "https://youtu.be/d4odhOR4d5M",
      description:
        "A documentary-style mobile app showcasing national history.",
    },
    project4: {
      title: "Multi-Agent AI System",
      github: "#",
      youtube: "https://youtu.be/EJ7Hllnb4Ik",
      description:
        "A Smart AI Agent (Personal Ai Assistant ) Workflow for Automation.",
    },
    project5: {
      title: "Lead Follow-Up",
      github: "#",
      youtube: "https://youtu.be/Tej42Z4ox00",
      description: "A Build an AI-Powered Instagram Content Automation System.",
    },
    project6: {
      title: "Instagram Content Automation",
      github: "#",
      youtube: "https://youtu.be/_3dabROLkvk",
      description:
        "Smart Lead Follow-Up Automation with n8n | AI + Human in the Loop Workflow.",
    },
    project7: {
      title: "Personal Ai Assistant",
      github: "#",
      youtube: "https://youtu.be/EJ7Hllnb4Ik",
      description:
        "A Smart AI Agent (Personal Ai Assistant ) Workflow for Automation.",
    },
  };

  // Set up static event listeners once
  youtubeOption.addEventListener("click", function () {
    youtubeContainer.style.display = "block";
  });

  projects.forEach((project) => {
    project.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");
      const projectInfo = projectData[projectId];
      if (!projectInfo) return;

      // Set project details
      titleElement.textContent = projectInfo.title;
      descriptionElement.textContent = projectInfo.description;
      githubLink.href = projectInfo.github;

      // Reset containers
      youtubeContainer.style.display = "none";

      youtubeIframe.src = "";

      // Show YouTube or LinkedIn
      if (projectInfo.youtube) {
        const youtubeUrl = projectInfo.youtube;
        const videoIdMatch = youtubeUrl.match(
          /(?:v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );
        const videoId = videoIdMatch ? videoIdMatch[1] : "";
        youtubeIframe.src = `https://www.youtube.com/embed/${videoId}`;
        youtubeContainer.style.display = "block";
      }

      // Show modal
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal logic
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    youtubeContainer.style.display = "none";
    linkedinContainer.style.display = "none";
    youtubeIframe.src = "";
    linkedinIframe.src = "";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      youtubeContainer.style.display = "none";
      linkedinContainer.style.display = "none";
      youtubeIframe.src = "";
      linkedinIframe.src = "";
      document.body.style.overflow = "auto";
    }
  });
});

// blog script

const modal = document.getElementById("blogModalb");
const modalTitle = document.getElementById("modalTitleb");
const modalImage = document.getElementById("modalImageb");
const modalContent = document.getElementById("modalContentb");
const closeBtn = document.querySelector(".close-btnb");

document.querySelectorAll(".blog-box").forEach((box) => {
  box.querySelector(".link").addEventListener("click", (e) => {
    e.preventDefault();

    const title = box.querySelector("h3").innerText;
    const imgSrc = box.querySelector("img").src;
    const fullText = box.querySelector(".full-content").innerHTML;

    modalTitle.innerText = title;
    modalImage.src = imgSrc;
    modalContent.innerHTML = fullText;

    modal.style.display = "block";
  });
});

closeBtn.onclick = () => (modal.style.display = "none");

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};
