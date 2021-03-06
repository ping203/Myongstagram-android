# myongstagram

  ## Table of Contents

1. [개발 환경](#개발-환경)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Running the App](#running-the-app)
3. [Screenshots](#screenshots)
   - [Signup & Signin & Logout](#signup--signin--logout)
   - [add, edit, delete Post](#add-edit-delete-post)
   - [Add Heart & Push Notification](#add-heart--push-notification)
   - [Search accounts & posts](#search-accounts--posts)
   - [Profile](#profile)
4. [Todo](#todo)

## 개발 환경

- React Native(Expo)
- Node.JS + Express + Postgres + firebase
- Android emulator : pixel2 api 26, galaxy s7 api 23

  

## Getting Started

#### Prerequisites

 ##### * Firebase Api Key

Follow these steps to get your firebase API key

1. Browse https://console.firebase.google.com

2. Generate an empty project

3. Change firebase storage security rules like:

   ```
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write;
       }
     }
   }
   ```

4. Navigate different icons in DEVELOP to get **apiKey, authDomain, databaseUrl, projectID, storageBucket, messagingSenderID**  and add them in `client/config/index.js`



#### Running the App

```
$ cd client
$ npm install
$ yarn start
```

```
$ cd server
$ npm install

$ psql postgres
  >  CREATE ROLE myongstagram WITH LOGIN CREATEDB PASSWORD 'myongstagram';
  
$ sequelize db:create 
$ sequelize db:migrate
$ sequelize db:seed:all

$ npm start
```

-Android Emulator-사용

## Screenshots

#### Signup & Signin & Logout

![signup&signin&logout](screenshots/login.gif)

#### add, edit, delete Post

![addPost&editPost&deletePost](screenshots/post.gif)

#### Add Heart & Push Notification 

![addHeart&pushNotification](screenshots/push.gif)

#### Search accounts & posts

![searchPeople&posts](screenshots/search.gif)

#### Profile

![profile&editProfile](screenshots/profile.gif)



## Todo

##### 18-05-25
 - [x] 5개 Screen(Feed, Search, AddPhoto, Notification, Profile) 추가
 - [x] BottomTab 추가
 - [x] Tab icon 적용
 - [x] Feed, Profile header 추가

> header가 stack 거쳐야 나옴.. 왜지?
> 마지막도 꼭 , 적어줘야 함.
> 로고가 묘하게 삐뚤어짐  


##### 18-05-27
 - [x] LoginScreen 추가
 - [x] Login button click => FeedScreen 이동
 - [x] screens 폴더 생성 => Screen들 이동

 > 폴더를 나눠야 할 것 같은데 어떻게 나눠야할지 모르겠음ㅠㅠ -> 스택들 다 하나하나 naigation에 넣어야 하는 건가
 > ....stack들 tabnavigation에 다 합치려고 했더니 header사라짐.......
 > ** Failed prop type: Invalid props.style key `marginRigth` supplied to `Text`. ** : 뭘까.. -> 오타난 것이였음...  

##### 18-05-31

- [ ] psql 환경변수 설정 -> 변수는 설정되었는데 인증을 못함..... pg_hba
- [x] toptab ~ing
- [x] search inputText

> ios-timer-outline
>
> 아이콘들 그냥 row하면 안됨-> view에 넣어야.
>
> 중앙에 탭 못만드나 ㅠㅠ => tab을 중첩시키면 될 듯
>
> 사진 resize가 제대로 안됨..  

##### 18-06-02 

- [x] 상단바 padding
- [x] card layout 완성~
- [x] folder 정리
- [x] header title 정렬 이상한 것 고침
- [x] profile 중첩 tab icon
- [x] login : signin 추가
- [x] signscreen 추가
- [ ] id -> password page id넘기기
- [ ] camera roll 하다가 중단

> 상단바 padding  `style={{ paddingTop: Expo.Constants.statusBarHeight }}`
>
> 중앙에 두려면 그 상위 view에다가 적용하기.
>
> 여전히 resizeMode안먹음..- > width 100% 설정
>
> resize는 되었는데 이제 남는 부분이 문제...
>
> 중첩 tab할 때 screen 껴 넣는 문제 => stack 두 개로 나눠서 header로
>
> headerTitle은 header와 다르게 top에 margin생김..
>
> cannot add a chile that doesn't have a yoganode to a parent without a -> 오탈자
>
> Invalid Client..............  



##### 18-06-03

- [x] props 넘기기.....
- [x] 갤러리 드디어 접근...
- [x] 사진 크롭
- [x] stylesheet 정리!

> state가 안바뀜(email 가입시) -> state는 바뀌는데 안넘어감.....  -> this.state를 this.props라고 pass함.. 삽질..
>
> permission-> app.json에서 
>
> 원래 header stack 가야 나왔었는데... 갑자기 혼자 길어지더니 이제 ㄴ됨... 고쳐야 겠다.  

##### 18-06-04

- [x] header 수정
- [x] stack 정리

> stack 없애면 header가 안나옴.... 
>
> header, headerTitle(이건 top margin 생김...)



`$ sequelize db:migrate`

- 테이블 생성됨

`$ sequelize db:migrate:undo`

- 테이블 생성 취소 - 계속해볼것.

table 만들때 띄어쓰기 절대 x  

##### 18-06-05
- [x] 이메일 형식 체크
- [x] 이메일 중복 체크
- [x] 회원가입 성공
- [x] 로그인 성공
- [x] 이미지 업로드 성공
- [x] get download url......
- [x] post insert 성공..

> image url -> undefinedㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
> user id....undefied...  

##### 18-06-06
- [x] user table에 이름, 프로필이미지 추가
- [x] user/post association
- [x] fetchPosts
- [x] story ui 추가
- [x] profile 버튼 고침
- [x] post 수정 server router


> fk join하려면 association 설정해야됨.
> 피드에 사진이 안들어감.....

> stack 정리해야됨.  

##### 18-06-07
- [x] post routes 정리
- [x] editPostScreen 추가
- [x] menu 추가 
- [x] post delete 추가  


##### 18-06-09
- [x] 이미지 안나오는 것 고침
- [x] 디테일페이지 완성
- [ ] 프로필 username
- [x] feed card 안나왔던 것 고침
- [x] 프로필 정리
- [x] user, account table 나눔
- [x] key string
- [x] 유저 정보 수정 추가

> 이미지 안나오는게 uri... %2f로 되어있었음.
> 프로필 username header 오류
> add, 변경할때 reducer어떻게 할지 고민..  

##### 18-06-10
- [x] 수정했을 때 리스트 리로드
- [x] 삭제했을 때 에러남.
- [x] 삭제했을 때 리스트 리로드
- [x] 검색 구현(유저로 할 것인지 글로 할 것인지..)
- [x] 프로필 게시물 개수 적기
- [ ] 프로필에서 리스트 짤림
- [ ] 로그아웃 버튼 
- [x] 프로필 헤더
- [x] 게시물 추가 헤더
- [x] 게시물 추가했을때 에러남....왜? -> list user정보 없어서. 해결
- [ ] 프로필에서 삭제했을 때 네비게이션 
- [x] 페이스북 ~정보받아오기

> user AsyncStorage로 옮김.  

##### 18-06-11
- [x] 수정/삭제 권한
- [x] 로그아웃 추가
- [x] search 버그
- [x] list key 
- [x] feed header 사라진 거 고치기
- [x] 프로필 수정 리로드
- [x] 내 post 리로드
- [x] like 추가
- [x] 하트 누르면 푸시 알림
- [x] 로그인, 새 글 작성 => text input 안남아있도록
- [x] reload button 추가

> 버그때문에 fk 삭제함.
> notification page 정리(옮기기)  

##### 18-06-12