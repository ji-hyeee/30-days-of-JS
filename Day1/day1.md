## Day 1 convert text to speech

</br>
몰랐던 JS 개념

1. SpeechSynthesis <br/>
   Web Speech API
   음성 서비스를 위한 컨트롤러 인터페이스

2. SpeechSynthesis.speaking <br/>
   말하고 있을 때 true 값 반환 (일시중지 상태여도)

3. SpeechSynthesis.getVoices() <br/>
   사용 가능한 음성 객체 목록을 반환해주는 메소드

4. SpeechSynthesis.pause() <br/>
   일시 중지로 만드는 메소드

5. SpeechSynthesis.resume() <br/>
   다시 시작하게 만드는 메소드

6. SpeechSynthesis.speak() <br/>
   말하는 메소드

7. vocieschanged <br/>
   eventListenr
   SpeechSynthesis.getVoices()메서드에서 객체 목록이 변경되면 이벤트 발생
   크롬 브라우저에서 페이지가 처음 로드될 때 발생 (크롬에서 구글 음성 리소스 지원)

8. new SpeechSynthesisUtterance() <br/>
   음성 서비스가 읽어야 하는 내용과 읽는 방법에 대한 정보를 포함하는 음성 요청을 나타냄

9. setInterval() <br/>
   웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나, 어떤 API로부터 변경된 데이터를 주기적으로 받아와야 하는 경우 사용

   어떤 코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
   첫번째 인자 : 실행할 코드
   두번째 인자 : 반복 주기

   예) 현재 시간을 2초마다 출력하기
   setInterval(()=>console.log(new Date()), 2000)
