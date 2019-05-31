# prismagram
Instagram clone with Express + Prisma + React and React Native


## Setup
```
yarn add graphql-yoga
yarn add nodemon -D
yarn add babel-node -D
yarn add dotenv
yarn add @babel/{node,preset-env}
yarn add @babel/core
```

## What?
1. babel
   - babel은 자바스크립트 컴파일러다. 입력은 자바스크립트 코드고 출력도 자바스크립트 코드다. 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하기 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다. ES6, ES7 등의 최신 문법을 사용해서 코딩을 할 수 있기 때문에 생산성이 향상된다.

1. nodemon
   - nodemon은 프로젝트 폴더의 파일들을 모니터링하고 있다가 파일이 수정될 경우 자동으로 서버를 리스타트 시켜준다. nodemon을 위해서 소스에 다른 설정을 추가할 필요도 없기 때문에 상당히 편리하게 사용할 수 있다. 

1. dotenv
   - Node.js 서비스의 환경변수를 사용할 때 dotenv를 쓴다. 런타임 때 중요한 변수들을 코드로부터 분리하는 방법인데 .env라는 파일에 원하는 변수들을 선언하고 서비스가 시작될 때 읽어들여 필요한 곳에서 사용하는 방식이다. 
  
1. @babel/preset-env
   - babel-preset-env는 babel이 동작할 때 지원범위가 어느정도까지 되어야 하는지에 대해 지정하도록 만들어주는 패키지이다.
  
1. @babel/core
   - babel-core는 babel이 실제 동작하는 코드이다.