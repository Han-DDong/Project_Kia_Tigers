// 메뉴 토글 버튼 작동
const toogleBtn = document.querySelector(".navbar_tooglebtn");
const menu = document.querySelector(".nav_menu");
const icons = document.querySelector(".nav_icon");

toogleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});

// 챔피언스 필드 구글맵
function myMap() {
  const lat = 35.1682592; // 챔피언스필드 위도
  const lng = 126.8884114; // 챔피언스필드 경도

  // 맵 속성 설정
  const mapProp = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 17,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  // 맵 생성
  const map = new google.maps.Map(document.getElementById("map"), mapProp);

  // 마커 위치 설정
  const myPos2 = { lat: lat, lng: lng };

  const customIcon = {
    url: "https://tile.routo.com/webgis_tile01/Static/images/marker/none.png", // 아이콘 이미지의 URL
    scaledSize: new google.maps.Size(50, 50), // 아이콘 크기 조정
    origin: new google.maps.Point(0, 0), // 아이콘의 원점
    anchor: new google.maps.Point(25, 50), // 아이콘의 앵커 지점
  };

  // 마커 생성 및 애니메이션 설정
  const marker2 = new google.maps.Marker({
    position: myPos2,
    animation: google.maps.Animation.BOUNCE, // 마커에 바운스 효과
    map: map,
    icon: customIcon, // 아이콘 이미지로 바꿔줌
    title: "광주기아챔피언스필드", // 마커의 타이틀 설정
  });

  // 정보 창 생성
  const infoWindow = new google.maps.InfoWindow({
    content:
      "<div><strong>광주기아챔피언스필드</strong><br>광주광역시 북구 서림로 10</div>",
  });
  infoWindow.open(map, marker2);
}

// 선수단 select
$(document).ready(function () {
  $(".player").change(function () {
    var selectedValue = $(this).val();
    // 선택된 값에 대한 추가 작업을 수행할 수 있습니다.
    if (selectedValue == 1) { // 코치스태프 선택시 나머지 숨기고 코치스태프만 보임
      $("#pitcher,#catcher,#infielder,#outfielder,#soldier").addClass("hidden");
      $("#coach").removeClass("hidden");
    } else if (selectedValue == 2) { // 투수 선택시 나머지 숨기고 투수만 보임
      $("#coach,#catcher,#infielder,#outfielder,#soldier").addClass("hidden");
      $("#pitcher").removeClass("hidden");
    } else if (selectedValue == 3) { // 포수 선택시 나머지 숨기고 포수만 보임
      $("#coach,#pitcher,#infielder,#outfielder,#soldier").addClass("hidden");
      $("#catcher").removeClass("hidden");
    } else if (selectedValue == 4) { // 내야수 선택시 나머지 숨기고 내야수만 보임
      $("#coach,#pitcher,#catcher,#outfielder,#soldier").addClass("hidden");
      $("#infielder").removeClass("hidden");
    } else if (selectedValue == 5) { // 외야수 선택시 나머지 숨기고 외야수만 보임
      $("#coach,#pitcher,#catcher,#infielder,#soldier").addClass("hidden");
      $("#outfielder").removeClass("hidden");
    } else if (selectedValue == 6) { // 군입대선수 선택시 나머지 숨기고 군입대 선수만 보임
      $("#coach,#pitcher,#catcher,#infielder,#outfielder").addClass("hidden");
      $("#soldier").removeClass("hidden");
    } else {
      $("#coach,#pitcher,#catcher,#infielder,#outfielder,#soldier").removeClass(
        "hidden"
      );
    }
  });
});

// 로그인 버튼 누르면 메인페이지로
$(document).ready(function () {
  $("#login-form").on("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    // 필요한 추가 검증 로직이 있으면 여기에 작성

    // 메인 페이지로 리다이렉션
    window.location.href = "index.html"; // 메인 페이지 URL로 변경
  });
});

// 메인페이지 뉴스 슬라이드
$(document).ready(function () {
  let slideIndex = 0;
  showSlides();

  // 슬라이드를 보여주는 함수
  function showSlides() {
    let slides = $(".mySlides");
    slides.hide(); // 모든 슬라이드를 숨김
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides.eq(slideIndex - 1).fadeIn(50); // 자연스러운 전환을 위해 fadeIn 사용
    setTimeout(showSlides, 1500); // 1.5초마다 슬라이드 전환
  }
});

// 경기일정 버튼 기능
$(document).ready(function () { // 문서가 완전히 로드된 후 스크립트가 실행
  let slideIndex = 0; // 현재 슬라이드의 시작 인덱스를 저장하는 변수
  showSlides(slideIndex);  // 초기 슬라이드를 표시하는 함수 호출

  $(".prev").click(function () { // prev 클래스를 가진 요소를 클릭할 때 실행되는 함수입니다. 슬라이드를 이전으로 3칸 이동
    changeSlide(-3);
  });

  $(".next").click(function () {  // next 클래스를 가진 요소를 클릭할 때 실행되는 함수입니다. 슬라이드를 다음으로 3칸 이동
    changeSlide(3);
  });

  function changeSlide(n) {  // slideIndex를 변경하고 showSlides 함수를 호출하여 슬라이드를 업데이트함.
    showSlides((slideIndex += n));
  };

  function showSlides(n) {
    let slides = $(".schedule"); // 모든 슬라이드를 선택함
    if (n >= slides.length) {
      slideIndex = 0; // 슬라이드 인텍스가 총 슬라이드 수를 넘으면 처음으로 돌아감.
    }
    if (n < 0) { // 슬라이드 인덱스가 0보다 작으면 마지막 
      slideIndex = slides.length - 3; // 슬라이드 인덱스가 0보다 작아지면 마지막 세 슬라이드를 표시함.
    }
    slides.hide(); // 모든 슬라이드를 숨김. 
    for (let i = slideIndex; i < slideIndex + 3 && i < slides.length; i++) { // 현재 인덱스부터 3개의 슬라이드를 표시함.
      $(slides[i]).show();
    }
  }
});

