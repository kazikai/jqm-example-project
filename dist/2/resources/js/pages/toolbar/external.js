  // external  toolbar 는 페이지 외부에 toolbar가 선언되어있을 경우  JavaScript를 이용하여 enhance
  // 시키는 방법임
  $(document).ready(function(){
    $( "[data-role='header'], [data-role='footer']" ).toolbar({ theme: "b" });
  });