# prismagram
Instagram clone with Express + Prisma + React and React Native

## User Flow

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Login)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Searcy by location
- [x] Follow / Unfollow User
- [x] Edit my profile
- [ ] See user profile
- [ ] See the full photo
- [ ] Upload a photo
- [ ] Edit the photo(Delete)
- [ ] See the feed


## Setup
```
yarn add graphql-yoga
yarn add nodemon -D
yarn add babel-node -D
yarn add dotenv
yarn add @babel/{node,preset-env}
yarn add @babel/core
yarn add morgan
yarn add graphql-tools
yarn add merge-graphql-schemas
yarn add global prisma
yarn add nodemailer
yarn add mailgun-js
yarn add nodemailer-sendgrid-transport
yarn add passport
yarn add passport-jwt
yarn add passport-facebook
yarn add jsonwebtoken
```

## What?
1. babel
  - babel은 자바스크립트 컴파일러다. 입력은 자바스크립트 코드고 출력도 자바스크립트 코드다. 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하기 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다. ES6, ES7 등의 최신 문법을 사용해서 코딩을 할 수 있기 때문에 생산성이 향상된다.

2. nodemon
  - nodemon은 프로젝트 폴더의 파일들을 모니터링하고 있다가 파일이 수정될 경우 자동으로 서버를 리스타트 시켜준다. nodemon을 위해서 소스에 다른 설정을 추가할 필요도 없기 때문에 상당히 편리하게 사용할 수 있다. 

3. dotenv
  - Node.js 서비스의 환경변수를 사용할 때 dotenv를 쓴다. 런타임 때 중요한 변수들을 코드로부터 분리하는 방법인데 .env라는 파일에 원하는 변수들을 선언하고 서비스가 시작될 때 읽어들여 필요한 곳에서 사용하는 방식이다. 
  
4. @babel/preset-env
  - babel-preset-env는 babel이 동작할 때 지원범위가 어느정도까지 되어야 하는지에 대해 지정하도록 만들어주는 패키지이다.
  
5. @babel/core
  - babel-core는 babel이 실제 동작하는 코드이다.

6. morgan
  - 누군가가 api로 무언가를 요청할때마다 미들웨어가 그것을 가로채 기록을 한다음 그 요청이 다음 단계로 진행되도록 한다. 모든 요청을 콘솔에 로깅(기록)하는 미들웨어

7. graphql-tools
  - 스키마와 resolve를 분리해 주는 구조를 만들어 주는 패키지이다.
  
8. merge-graphql-schemas
  - 모듈화된 GraphQL 스키마와 resolver 객체의 병합이 용이하도록 지원하는 유틸리티 라이브러리.
  
9. nodemailer
  - 웹 서비스에서 메일 전송은 회원의 비밀번호 찾기, 프로모션 발송, 가입 인증 등 여러 방면에서 활용할 수있다. nodemailer는 node서버에서 메일을 보낼 수 있는 메일 전송 모듈이다.
  - Gmail 이용시 하루 최대 500건 사용 가능하므로 소규모 사이트에서 사용하기 좋다.
  - 많은 메일을 발송해야 한다면 AWS SES, Mailgun 같은 메일 서비스를 이용해야 한다.

10. nodemailer-sendgrid-transport, mailgun
  - mailing system으로 mailgun이나 sendgrid 둘중 하나 선택하여 사용 해야한다. 현재 프로젝트에 두개 다 구현함(default: sendgrid)

11. passportjs
  - 패스포트는 각 앱이 구글로 가입할거냐, 페북으로 가입할거냐, 로컬에서 직접 가입할거냐 등 인증 요구사항을 가지는 것을 인지하고 전략 (strategies)으로 알려져 있는 인증 메커니즘을 각 모듈로 패키지화 해서 제공하고 있다. 즉, 앱은 패스포트에서 지원하는 전략을 선택해 의존성 없이 독립적으로 이용가능하다. 그래서 인증이라는 기능의 복잡성에도 불구하고 코드는 복잡해지지 않는다.

12. jsonwebtoken
  - JWT 는 JSON Web Token의 약자로 전자 서명 된 URL-safe (URL로 이용할 수있는 문자 만 구성된)의 JSON. 전자 서명은 JSON 의 변조를 체크 할 수 있게되어 있으며 JWT는 속성 정보 (Claim)를 JSON 데이터 구조로 표현한 토큰으로 RFC7519 표준 입니다.
  - JWT는 서버와 클라이언트 간 정보를 주고 받을 때 Http 리퀘스트 헤더에 JSON 토큰을 넣은 후 서버는 별도의 인증 과정없이 헤더에 포함되어 있는 JWT 정보를 통해 인증한다. 이때 사용되는 JSON 데이터는 URL-Safe 하도록 URL에 포함할 수 있는 문자만으로 만든다.
  - JWT는 HMAC 알고리즘을 사용하여 비밀키 또는 RSA를 이용한 Public Key/ Private Key 쌍으로 서명할 수 있다.

## [Prisma](https://www.prisma.io/)
```
‘Prisma’는 무엇을 하는 녀석일까? 공식 문서에는 이렇게 정의하고 있다.

Prisma is a data layer that replaces traditional ORMs in your application architecture. (Prisma는 애플리케이션 구조의 전통적인 ORM을 대체하는 데이터 계층이다.)
Sequlize같은 ORM을 대체한다고 하는데, Data layer를 위한 코드 자체는 ORM과 크게 다르지 않다. 하지만 그것을 위한 설계 방식이 생소한데, Back-end 애플리케이션에도 Client라고 부르는 것이 존재한다는 것이다.

사실 우리는 Front-end 애플리케이션을 클라이언트라고 주로 부르고 있었는데, 여기서 모든 팀 멤버들의 혼란이 시작됐고, 공식 문서의 그림과 설명을 봐도 제대로 이해를 할 수가 없었다.

"백엔드 프레임워크가 왜 클라이언트를 갖고 있어? 이거 브라우저에서 써야 하는 거 아니야?"
결론만 말하자면 아니다. Prisma의 멤버가 이미 ‘브라우저에서 사용할 수 있는 Prisma Client를 만들자’라는 제안을 했더라.

우선 Prisma는 TypeScript 친화적이며, DB의 Schema와 Table들을 GraphQL SDL과 TypeScript의 타입 정의로 Import/Export 할 수 있는 기능이 있다. 이 기능을 통해 DB -> SDL 혹은 그 역으로 현재는 PostgreSQL/MongoDB만 지원하는 DB Migration이 가능하다고 한다.

Prisma는 크게 Prisma Client와 Prisma Server로 나뉜다.

Prisma Server는 Docker로 배포되어 docker-compose로 구동이 가능하며, 애플리케이션(Prisma Client)과 DB 사이에서 Proxy 역할을 한다. Prisma CLI를 통해 앞 문단에서 말했던 SDL Modeling과 DB Migration도 이 Prisma Server가 사용 가능한 상태일 때 가능하다. 이 서버는 GraphQL 서버를 기본으로 탑재하고 있어, 개발자가 따로 GraphQL 서버 구성을 해 줄 필요가 없다.

Prisma Client는 Prisma CLI가 자동으로 생성해주는 라이브러리 형식의 클라이언트이다. DB Model에 따라 자동으로 Type이 생성되어, Prisma Client가 ORM 형식으로 사용될 수 있도록 돕는다. 물론 미리 만들어진 SDL과 연동되어 GraphQL 그대로를 사용할 수도 있다.

따라서 서버 애플리케이션을 구성할 때, Business Logic을 작성하면서 DB 접근이 필요한 작업은 Prisma Client를 Import하여 사용해야 한다는 것이다.

추가로, Prisma Server는 Prisma에서 Prisma Cloud라는 제품을 제공하고 있어, 현재 사용 가능한 서버가 없다면 이 솔루션을 사용할 수 있을 것 같다.
```

## Prisma Setup
- Install Prisma via Homebrew
```
brew tap prisma/prisma
brew install prisma
```

- Alternative: Install with NPM or Yarn
```
npm install -g prisma
# or
yarn global add prisma
```