document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".recycleTab button"); // 종이 등 버튼 불러오기
  const contents = document.querySelectorAll(".recycleContent>div"); // 내용부분 불러오기
  const subBtns = document.querySelectorAll(".recycleSubTab li"); // 재활용가능,불가능 버튼 불러오기

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
        // button.classList.remove("active");
      });
      subBtns[currentIndex].style.display = "block";

    

    });
  });
// recycleTab


  
});