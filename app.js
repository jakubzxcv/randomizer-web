
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }
  const menu = document.getElementById("menu");
  const closeIcon = document.querySelector(".close-icon");
  const menuIcon = document.querySelector(".material-symbols-outlined");
  
  menu.addEventListener("click", function() {
    const submenu = this.querySelector("ul");
    this.classList.toggle("active");
    if (submenu.style.display === "block") {
      submenu.style.display = "none";
      closeIcon.style.display = "none";
      menuIcon.style.display = "inline-block";
    } else {
      submenu.style.display = "block";
      closeIcon.style.display = "inline-block";
      menuIcon.style.display = "none";
    }
  });
  window.addEventListener('DOMContentLoaded', function() {
    var textbox = document.querySelector('.textbox');
    textbox.focus();
  });
  

  