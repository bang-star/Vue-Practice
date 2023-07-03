# 문서

## 뷰 기초 옵션, 문법 훓어보기

 - props : 부모 컴포넌트에서 넘어온 데이터(수정불가)
 - data : 데이터들을 담고 있는 속성
 - methods : 함수를 담고 있는 속성
 - computed : 강력한 캐싱 기능, 데이터가 변경되었을 때 자동으로 변환시켜줌.
 - watch : 특정 데이터가 변경되는 시점에 액션을 취하고 싶을 때 사용

 - computed vs watch
   - computed는 캐싱 기능이 있음
   - computed는 선언형 프로그래밍(무엇을 할 것인가) / watch는 명령형 프로그래밍(무엇을 어떻게 할 것인가)

 - v-bind: 속성값을 넣고 싶을 때(v-bind:msg / :msg)
 - v-on: 이벤트를 넣고 싶을 때(v-on:click-msg  / @click-msg)
 - v-model: UI 요소에 넣으면 데이터가 연결 됨
 - v-if : 조건문을 넣고 싶을 때
 - v-for : 반복문을 넣고 싶을 때