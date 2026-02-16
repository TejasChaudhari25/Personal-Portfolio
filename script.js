const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    toggle.innerText = "☀️";
  } else {
    toggle.innerText = "🌙";
  }
});
