// 카테고리별 콘텐츠를 표시하는 함수
function showContent(category) {
  // 모든 콘텐츠를 숨김
  const contents = document.querySelectorAll('.recycleContent > div');
  contents.forEach(content => content.classList.remove('active'));
  
  // 선택한 카테고리의 콘텐츠를 표시
  const selectedContent = document.getElementById('content' + category);
  if (selectedContent) {
      selectedContent.classList.add('active');
  }
  
  // 모든 버튼에서 active 클래스 제거
  const buttons = document.querySelectorAll('.recycleTab button');
  buttons.forEach(button => button.classList.remove('active'));
  
  // 선택한 버튼에 active 클래스 추가
  const activeButton = document.getElementById('button' + category);
  if (activeButton) {
      activeButton.classList.add('active');
  }

  // 해당 텍스트를 표시하는 부분 수정
  const activeButtonText = activeButton.textContent; // 현재 활성화된 버튼의 텍스트
  const contentText = document.querySelector('.content' + category + ' p'); // 해당 콘텐츠의 텍스트 엘리먼트
  if (contentText) {
      contentText.textContent = activeButtonText; // 텍스트 엘리먼트에 버튼 텍스트를 설정
  }

  // 모든 subTab을 숨김
  const subTabs = document.querySelectorAll('.recycleSubTab ul li');
  subTabs.forEach(subTab => subTab.style.display = 'none');
  
  // 선택한 subTab을 표시
  const selectedSubTab = document.querySelector('.subTab' + category);
  if (selectedSubTab) {
      selectedSubTab.style.display = 'block';
  }
}


document.addEventListener("DOMContentLoaded", function() {
  const btns = document.querySelectorAll(".recycleTab button"); // 메인 버튼 불러오기
  const contents = document.querySelectorAll(".recycleContent div"); // 메인 내용 부분 불러오기
  const subBtns = document.querySelectorAll(".recycleSubTab li"); // 서브 버튼들 한번에 불러오기
  const subBtn = document.querySelectorAll(".recycleSubTab button"); // 각 서브 버튼 불러오기
  const subCtns = document.querySelectorAll(".recycleContent li"); // 서브 내용 불러오기

  // 모든 스타일 초기화(안보이게)
  contents.forEach(content=>{
    content.style.display = "none";
  });
  subBtns.forEach(button=>{
    button.style.display = "none";
  });
  subCtns.forEach(content=>{
    content.style.display = "none";
  })
  
  // 첫번째 내용 보이게
  contents[0].style.display = "block";
  subBtns[0].style.display = "block";
  subCtns[0].style.display = "block";
  
  // 메인 버튼 클릭 시 이벤트 설정
  btns.forEach((button, index)=>{
    button.addEventListener("click", function(){
      const currentIndex = index;

      // 활성화된 메인 버튼 표시
      btns.forEach(btn=>{
        btn.classList.remove("active"); // 모든 메인 버튼 클래스 제거
      });
      button.classList.add("active"); // 클릭된 메인 버튼 클래스 추가

      // 해당하는 내용 표시
      contents.forEach(content=>{
        content.style.display = "none"; // 모든 내용 안 보이게
      });
      contents[currentIndex].style.display = "block"; // 클릭된 메인버튼의 내용 표시

      // 해당하는 서브 버튼 표시
      subBtns.forEach(btn=>{
        btn.style.display = "none"; //모든 서브 버튼 안보이게
      });
      subBtns[currentIndex].style.display = "block"; // 클릭된 메인버튼의 서브버튼 표시


      // 해당 메인 버튼의 첫 번째 서브버튼을 활성화
      const firstSubBtn = subBtns[currentIndex].querySelector('button');
      firstSubBtn.click();

    });
  });

  // 서브 버튼 클릭 시 이벤트 설정
  subBtn.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentIndex = index;

      // 활성화된 서브 버튼 표시
      subBtn.forEach(btn=>{
        btn.classList.remove("active"); // 모든 서브 버튼 클래스 제거
      });
      button.classList.add("active"); // 클릭된 서브 버튼에 클래스 추가

      // 해당하는 서브 내용 표시
      subCtns.forEach(content=>{
        content.style.display = "none"; // 모든 서브내용 안보이게
      });
      subCtns[currentIndex].style.display = "block"; // 클릭된 서브버튼의 내용 보이게

    });
  });

    
});