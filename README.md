# Emotion Diary
### Site : https://soyeon-react-project.web.app/
![diary](https://user-images.githubusercontent.com/88068412/210568651-fb31082c-3f29-4c6c-b84e-83af13ce0e99.png)

1. 프로젝트 전반적으로 사용될 일기 데이터 state 관리 로직 작성. (Home, New, Edit, Diary)
2. 공통 button을 컴포넌트에 만듬.
3. 일기 데이터 state를 공급할 context를 생성하고 provider로 공급.
4. 일기 데이터 state의 dispatch 함수들을 공급할 context를 생성하고 provider로 공급.
5. Home에서 header에 현재 날짜, 좌우 버튼 만들어주고, 필터링, 일기쓰기 만들어줌.
6. DiaryItem에 감정에 따른 이미지 넣어고, date와 수정하기 버튼을 만들어줌.
7. New 페이지에서 뒤로가기 버튼을 만들고 (useNavigate(-1)사용)
8. 날짜를 선택할 수 있는 캘린더를 만들어주고(input type="date") 감정을 선택할 수 있는 EmotionItem을 만들어줌. 선택된 id에 따라서 class에 on,off 붙게 하여 각각의 감정에 색깔을 css로 구분.
9. Edit 페이지에 useContext를 통해 원본페이지의 내용을 가져옴.
10. Diary 페이지에 일기가 존재할때와 존재하지 않을때를 구분해서 보여줌.
11. 오늘의 감정 이미지와 텍스트, 입력폼을 나오게 만듬.
12. localStorage를 통해 일기 데이터를 저장함.
13. React.Memo를 사용해서 header 버튼,  DiaryItem, EmotionItem에 적용시켜서 최적화시킴.
14. firebase를 사용해서 배포.
15. Open Graph meta 태그에 image, site_name, description 입력하고 npm run build, firebase deploy로 마지막으로 배포.
