### 로드맵

- card
  [x] CARD Layout
  [x] CARD 모형
  [] infinite scroll 적용 해야함
  [] api 연결

- modal
  [] 카테고리 모달 (레이아웃)
  [] 즐겨찾기 모달

- Drag and Drop
  [x] 기본 셋업
  [x] element 들 (카드, 서치바 등)
  [] element를 담을 프레임 필요
  [] 엘리먼트 정보 저장 필요
  [] API 연결 (json.server 임시)

- User
  [] 회원가입
  [] 로그인

-category, tag 설정필요

### db 임시

```json
// Frame
{
  "frmae": [
    {
      "name": "main",
      "size": {
        "width": 300,
        "height": 500,
      },
      "location": {
        "order": 1,
        "href": "/responsive",
        "x": 0,
        "y": 0
      },
      "createdAt": "2021-11-01",
      "modifiedAt": "2021-11-01"
    }
  ],

  "element": [
    {
      "type": "searchbar",
      "name": "google searchbar",
      "location": {
        "frame": "main",
        "order": 1,
        "href": "/responsive",
        "x": 20,
        "y": 40
      },
      "info": {
        "type": "searchbar",
        "name": "google searchbar",
        ...
      },
      "createdAt": "2021-11-01",
      "modifiedAt": "2021-11-01"
    }
  ]
}
```
