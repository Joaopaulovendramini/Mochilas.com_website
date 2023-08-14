
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  const isDarkMode = localStorage.getItem("darkMode");
  
 
  if (isDarkMode === "enabled") {
    toggleDarkMode();
  }
  
 
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
  

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
    } else {
      localStorage.setItem("darkMode", "disabled");
    }
  });

  
  