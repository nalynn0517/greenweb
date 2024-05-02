document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".recycleTab button");
  const contents = document.querySelectorAll(".recycleContent div");

  contents.forEach(content=>{
    content.style.display = "none";
  });

  contents[0].style.display = "block";

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

      //subTab
      const subTabCount = {
        subTabBtn1 : 2,
        subTabBtn2 : 3,
        subTabBtn3 : 2,
        subTabBtn4 : 8,
        subTabBtn5 : 2,
        subTabBtn6 : 2,
        subTabBtn7 : 2,
        subTabBtn8 : 2
      };

      const currentButtonId = button.getAttribute("id");
      const subButtonCount = subTabCount[currentButtonId];

      const recycleSubTab = document.querySelector("recycleSubTab");
      recycleSubTab.innerHTML = "";

      for(let i = 1; i <= subButtonCount; i++){
        const subButton = document.createElement("button");
        subButton.textContent = `Sub Button ${1}`;
        recycleSubTab.appendChild(subButton);
      }

      //button click event listener

    });
  });
// recycleTab


  
});