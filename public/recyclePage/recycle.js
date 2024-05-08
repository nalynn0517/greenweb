document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".recycleTab button"); // 종이 등 버튼 불러오기
  const contents = document.querySelectorAll(".recycleContent div"); // 내용부분 불러오기
  const subBtns = document.querySelectorAll(".recycleSubTab li"); // 서브 버튼 불러오기
  const subBtn = document.querySelectorAll(".recycleSubTab button"); // 서브버튼 각각 버튼 불러오기
  const subCtns = document.querySelectorAll(".recycleContent li");

  contents.forEach(content=>{
    content.style.display = "none";
  });
  subBtns.forEach(button=>{
    button.style.display = "none";
  });
  subCtns.forEach(ctn=>{
    ctn.style.display = "none";
  })
  
  contents[0].style.display = "block";
  subBtns[0].style.display = "block";
  subCtns[0].style.display = "block";
  
  buttons.forEach((button, index)=>{
    button.addEventListener("click", function(){
      const currentIndex = index;

      buttons.forEach(btn=>{ //큰 버튼 클릭했을때
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


      // 해당 메인 버튼의 첫 번째 서브버튼을 활성화
      const firstSubBtn = subBtns[currentIndex].querySelector('button');
      firstSubBtn.click();

    });
  });
// recycleTab
  subBtn.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentIndex = index;

      subBtn.forEach(btn=>{
        btn.classList.remove("active");
      });
      button.classList.add("active");

      subCtns.forEach(content=>{
        content.style.display = "none";
      });
      subCtns[currentIndex].style.display = "block";

    });
  });

    
});