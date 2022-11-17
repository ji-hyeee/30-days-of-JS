## Day 2 balance ball game

</br>
몰랐던 개념

CSS

1. background-clip <br/>
   배경이 테두리, 패딩, 콘텐츠 아래로 확장되는지 여부 설정
   배경 이미지나 배경색을 박스 중 어디에 넣을 지 정하는 속성

JS

1. windomw.getComputedStyle(element) <br/>
   인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체 회신
   자바스크립트에서 html 태그들의 CSS 값을 확인할 수 있다

2. CSSStyleDeclaration.getPropertyValue() <br/>
   지정된 CSS 속성 값이 포함된 문자열을 반환합니다
   getComputedStyle() 메서드와 사용 시 더 편리하게 사용 가능

3. Element.setAttribute(속성 이름, 속성 값) <br/>
   지정된 요소의 속성 값을 설정합니다.
   속성이 이미 있으면 값이 업데이트됩니다.
   그렇지 않으면 지정된 이름과 값으로 새 속성이 추가됩니다.

4. location.reload(option) <br/>
   새로고침 버튼처럼 현재 리소스를 다시 불러온다
