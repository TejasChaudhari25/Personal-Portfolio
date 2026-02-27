document.getElementById("darkToggle").addEventListener("click", function(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    this.innerText = "☀️";
  } else {
    this.innerText = "🌙";
  }
});

const toggleBtn = document.getElementById("theme-toggle");
const toggleBtnMobile = document.getElementById("theme-toggle-mobile");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = "☀️";
        if (toggleBtnMobile) toggleBtnMobile.innerHTML = "☀️";
    } else {
        toggleBtn.innerHTML = "🌙";
        if (toggleBtnMobile) toggleBtnMobile.innerHTML = "🌙";
    }
}

if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);
if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleTheme);
