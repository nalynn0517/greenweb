const buttons = document.querySelectorAll(".recycleTab button");
const contents = document.querySelectorAll(".recycleContent div");

contents.forEach(content=>{
  content.style.display = "block";
});
buttons.forEach((button, index)=>{
  button.addEventListener("click", function(){
    const currentIndex = index;
    buttons.forEach(btn=>{
      btn.classList.remove("active");
    });
    button.classList.add("active");

    contents.forEach(content=>{
      content.style.display = "none";
    });
    contents[currentIndex].style.display = "block";
  });
});