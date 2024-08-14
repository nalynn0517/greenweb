document.addEventListener("DOMContentLoaded", function() {
  // 카테고리 버튼 클릭 이벤트 처리
  document.querySelectorAll(".recycleTab button").forEach(button => {
    button.addEventListener("click", function() {
      const category = this.id.replace('button', '');
      showContent(category);
    });
  });

  // 서브 버튼 클릭 이벤트 처리
  document.querySelectorAll(".recycleSubTab button").forEach(button => {
    button.addEventListener("click", function() {
      const category = this.closest('li').className.replace('subTab', '');
      const subContentIndex = Array.from(this.parentNode.children).indexOf(this);
      showSubContent(category, subContentIndex);
    });
  });

  // 카테고리와 서브 콘텐츠를 표시하는 함수
  function showContent(category) {
    // 모든 콘텐츠와 서브 탭 숨기기
    document.querySelectorAll('.recycleContent > div').forEach(content => content.style.display = 'none');
    document.querySelectorAll('.recycleSubTab ul li').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.recycleSubTab button').forEach(button => button.classList.remove('active'));

    // 선택한 카테고리의 콘텐츠와 서브 탭 표시
    const selectedContent = document.getElementById('content' + category);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }

    const selectedSubTab = document.querySelector('.subTab' + category);
    if (selectedSubTab) {
      selectedSubTab.style.display = 'block';
    }

    // 모든 버튼에서 active 클래스 제거
    document.querySelectorAll('.recycleTab button').forEach(button => button.classList.remove('active'));
    const activeButton = document.getElementById('button' + category);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  // 서브 콘텐츠를 표시하는 함수
  function showSubContent(category, subContentIndex) {
    // 모든 서브 콘텐츠 숨기기
    document.querySelectorAll(`#content${category} ul li`).forEach(content => content.style.display = 'none');
    
    // 선택한 서브 콘텐츠 표시
    const selectedSubContent = document.querySelector(`#content${category} ul li:nth-child(${subContentIndex + 1})`);
    if (selectedSubContent) {
        selectedSubContent.style.display = 'block';
    }
    
    // 모든 서브 버튼에서 active 클래스 제거
    document.querySelectorAll('.recycleSubTab button').forEach(button => button.classList.remove('active'));
    const activeSubButton = document.querySelector(`.subTab${category} button:nth-child(${subContentIndex + 1})`);
    if (activeSubButton) {
        activeSubButton.classList.add('active');
    }
  }

  // 초기 상태 설정: 첫 번째 카테고리와 서브 버튼이 자동으로 클릭되지 않도록 설정
  const defaultCategoryButton = document.querySelector('.recycleTab button');
  if (defaultCategoryButton) {
    const defaultCategory = defaultCategoryButton.id.replace('button', '');
    showContent(defaultCategory);

    // 서브 버튼이 선택되지 않도록 하기 위해 초기 상태에서 아무 버튼도 클릭하지 않음
    // const defaultSubButton = document.querySelector(`.subTab${defaultCategory} button`);
    // if (defaultSubButton) {
    //   const subContentIndex = Array.from(defaultSubButton.parentNode.children).indexOf(defaultSubButton);
    //   showSubContent(defaultCategory, subContentIndex);
    // }
  }
});
