## Day 4 Random Password Generator

</br>
몰랐던 개념

HTML

- input tag readonly </br>
  input 요소의 입력 필드가 읽기 전용임을 명시
  수정할 수 없지만 하이라이트, 복사는 가능하다

```
<input readonly/>
```

</br>

CSS

- user-select </br>
  브라우저에서 드래그나 더블클릭을 사용한 텍스트 선택 설정

```
user-select : none;
```

</br>

JS

- clipboard API </br>
  클립보드 명령(잘라내기, 복사, 붙여넣기)에 응답하거나
  시스템 클립보드에 비동기적으로 접근하고 쓸 수 있는 기능 제공

```
navigator.clipboard.writeText(복사하고 싶은 값);
```
