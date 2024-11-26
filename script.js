// Menambahkan event ke tombol navbar
document.getElementById("homeButton").addEventListener("click", function () {
  alert("Naik Anjing AEE!");
});

document.getElementById("serverButton").addEventListener("click", function () {
  alert("Setan!");
});

document.getElementById("storeButton").addEventListener("click", function () {
  alert("VEZORAKEY ganteng😘");
});

document.getElementById("contactButton").addEventListener("click", function () {
  alert("Bajingan!");
});

// Ambil elemen hamburger, menu utama, dan tools list
const hamburgerButton = document.getElementById("hamburgerButton");
const navMenu = document.getElementById("navMenu");
const toolsList = document.getElementById("toolsList");

// Event untuk toggle menu
hamburgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Toggle menu utama
  toolsList.classList.toggle("active");
  toolsList.style.display =
    toolsList.style.display === "none" ? "block" : "none"; // Toggle tools list
});

// Tombol Subscribe
document
  .querySelector(".subscribe-button")
  .addEventListener("click", function () {
    alert("Terima kasih telah MENGENTOD!");
  });
