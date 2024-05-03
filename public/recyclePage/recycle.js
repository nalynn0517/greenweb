document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".recycleTab button");
  const contents = document.querySelectorAll(".recycleContent div");
  const subBtns = document.querySelectorAll(".recycleSubTab li");

  contents.forEach(content=>{
    content.style.display = "none";
  });
  subBtns.forEach(button=>{
    button.style.display = "none";
  });
  
  contents[0].style.display = "block";
  subBtns[0].style.display = "block";

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

      subBtns.forEach(button=>{
        button.style.display = "none";
      });
      subBtns[currentIndex].style.display = "block";

      //subTab

      //button click event listener

    });
  });
// recycleTab


  
});