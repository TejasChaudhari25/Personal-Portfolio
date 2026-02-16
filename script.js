document.getElementById("darkToggle").addEventListener("click", function(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    this.innerText = "☀️";
  } else {
    this.innerText = "🌙";
  }
});
