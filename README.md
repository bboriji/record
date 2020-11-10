# Record

Record는 개인화된 블로그 플랫폼 서비스를 제공해주는 프로젝트이며,  
**코드 스타일링과 SSR기반의 검색엔진에 자주 노출 될 수 있도록하는 특징**을 가진 서비스를 목표로 하고 있습니다.

**~[Demo Page](https://fog.naora.dev/)~**  
준비중

**[API 서버](https://fog.naora.dev/api)**  
관련된 API 를 테스트해보실 수 있습니다.

### [Wiki](https://github.com/bboriji/record/wiki) 에 개요와 기획서를 정리해놓았습니다.

#### [FE 기능 정리](https://github.com/bboriji/record/wiki#frontend)

FE 개발에 필요한 화면 명세와 기능을 정의해놓았습니다.

#### [BE API 명세](https://github.com/bboriji/record/wiki/API-%EB%AA%85%EC%84%B8)

BE 개발에 필요한 API 를 문서화해놓았습니다.

### 커밋 / 브랜칭 전략

#### 커밋

한글로 작성하며, ~ 함 으로 마무리 짓는다

#### 브랜칭 전략

**GitFlow** 전략을 따른다.

각 기능별로 이슈 브랜치를 만들어서 기능을 구현하며,  
이슈 번호별로 `feature/${이슈번호}` 의 브랜치를 만들어서 코드를 구현한다.

기능이 완성되면, PR 을 이용해 Develop - Main 으로 머지과정을 거친다.  
이 과정중 일부의 수정사항이 발생할 수 있다.
