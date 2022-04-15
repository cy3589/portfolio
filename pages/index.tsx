/* eslint-disable react/no-danger */
import FanSpinIcon from '@components/FanSpinIcon';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Portfolio from '@components/Portfolio';
import { PortfolioData } from '@interfaces/IndePageInterfaces';
import {
  Section,
  SectionTitle,
  ContactWrapper,
  ProfileImageWrapper,
  Ul,
  MainSkillsWrapper,
  SkillImagesWrapper,
  SkillImageWrapper,
  SkillImage,
  PortfolioCardsWrapper,
  ContactsWrapper,
  FirstPrH1,
  MainSkillsH1,
  Footer,
  GitHubFontAwesomeIcon,
} from '@styles/IndexStyled';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const mySkills: { src: string; alt: string }[] = [
  { src: '/reactjs-logo.png', alt: 'reactjs-logo' },
  { src: '/nextjs-logo.png', alt: 'nextjs-logo' },
  { src: '/redux-logo.jpg', alt: 'redux-logo' },
  { src: '/react-query-logo.svg', alt: 'react-query-logo' },
  { src: '/javscript-logo.svg', alt: 'javscript-logo' },
  { src: '/typescript-logo.svg', alt: 'typescript-logo' },
  { src: '/emotion-logo.png', alt: 'emotion-logo' },
];

const me: { phone: string; email: string; mePr: string[] } = {
  phone: '010-2102-3589',
  email: 'jcy3589@gmail.com',
  mePr: [
    '평소에 무언가 만드는 것을 좋아하며 &quot;왜?&quot; 라는 질문을 자주 던집니다.\n방대한 자료가 존재하며 질문과 답변이 활발한 IT 분야에 매력를 느껴 공부하기 시작했습니다.',
    '최신 기술에 관심이 많습니다.\n최신 기술이 나오면 기존 기술과 무엇이 다르며,\n어떤 문제를 해결하기 위해 나온 것인지 답을 찾고 적용해 보는 것을 좋아합니다.',
    '질문과 답변, 협업을 좋아합니다.\n질문을 통해 문제를 해결할 수 있고,\n답변을 통해 내가 알고있는 지식의 깊이를 재확인 할 수 있다고 생각합니다.\n질문과 답변으로 서로 성장하고, 협업으로 하나의 프로젝트를 완성해 나가는 과정이 아름답다고 생각하고 있습니다.',
    '항상 배우는 자세로 어제보다 더 나은 개발자가 되겠습니다.',
  ],
};

const skills = [
  '`React`를 이용한 SPA 제작이 가능합니다.',
  '`NextJS`를 이용한 SPA 제작과 서버사이드 데이터페칭이 가능합니다.',
  '`Redux`를 이용하여 전역 상태를 관리할 수 있습니다.',
  '`React-Query`를 이용하여 서버와의 연결상태를 관리하고 상태에 렌더를 구현할 수 있습니다.',
  '`Emotion`을 이용하여 컴포넌트 별 스타일을 관리할 수 있습니다.',
  '`JavaScript` 내장 메서드를 이용한 연산과 DOM 객체의 제어가 가능합니다.',
  '`Typescript`를 이용하여 개발 시 타입을 적용할 수 있습니다.',
  '`NodeJS`와 `Express`를 이용하여 간단한 백엔드 서버를 구축할 수 있습니다.',
];
const projects: PortfolioData[] = [
  {
    with: '개인',
    title: 'NodeBird',
    description: 'NextJS를 기반으로 만든 SNS 웹 서비스 입니다',
    isDeploy: true,
    deployLink: 'nodebird.cy3589.com',
    githubLink: 'github.com/cy3589/NodeBird__',
    thumbnailUrl: '/nodebird/nodebird-thumbnail.png',
    images: [
      '/nodebird/nodebird-thumbnail.png',
      '/nodebird/nodebird-image0.png',
    ],
    dependencies: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'Redux',
        'Redux-Saga',
        'react-slick',
        'emotion',
      ],
      back: ['NodeJS', 'mySQL', 'sequelize', 'passport', 'bcrypt'],
    },
    detailedDescription:
      'NextJS를 기반으로 만든 트위터와 비슷한 기능을 하는 SNS 웹 서비스 입니다.',
    whatILearned: [
      '전역 상태를 관리하는 리덕스를 적용하여 리덕스 사용법과 흐름을 알게 되었습니다.',
      '최초 자바스크립트로 만든 프로젝트를 타입스크립트로 리팩토링 하며 타입스크립트를 왜 쓰는지 알게되었습니다',
      '백엔드도 같이 만들면서 프론트와 백엔드가 어떻게 소통하고, 데이터가 어떻게 흘러가는지 알게되었습니다.',
      'NextJS의 서버사이드 동작 함수의 동작 흐름과 리덕스와의 연동법을 알게되었습니다.',
    ],
  },
  {
    with: '개인',
    title: 'Sleact',
    description: 'NextJS를 기반으로 만든 슬랙의 클론코딩 입니다',
    isDeploy: true,
    deployLink: 'sleact.cy3589.com',
    githubLink: 'github.com/cy3589/sleact-react-query',
    thumbnailUrl: '/sleact/sleact-thumbnail.png',
    images: [
      '/sleact/sleact-image0.png',
      '/sleact/sleact-image1.png',
      '/sleact/sleact-image2.png',
      '/sleact/sleact-image3.png',
      '/sleact/sleact-image4.png',
      '/sleact/sleact-image5.png',
    ],
    dependencies: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'react-query',
        'Redux-Saga',
        'react-slick',
        'emotion',
        'socket',
      ],
    },
    detailedDescription: '',
    whatILearned: [
      'React-Query를 프로젝트에 적용해보며 비슷한 구조임에도 짧아지는 코드량을 경험하였습니다.',
      'Socket.io를 이용한 실시간 통신과 데이터페칭을 구현하며 웹소켓의 동작 흐름을 간략히 알게되었습니다.',
      '일반적인 게시글과 달리 역으로 동작해야하는 채팅의 무한스크롤을 구현하며 React-Query의 역방향 데이터 업데이트 방법을 알게되었습니다.',
      'Emotion에 Type을 적용하여 정확한 type과 prop을 적용한 Emotion 사용법을 알게 되었습니다.',
    ],
  },
  {
    with: '팀',
    title: 'Dokteuk',
    description: 'NextJS를 기반으로 만든 커뮤니티 입니다',
    isDeploy: false,
    githubLink: 'github.com/cy3589/dokteuk',
    thumbnailUrl: '/dokteuk/dokteuk-thumbnail.png',
    dependencies: {
      front: [
        'NextJS',
        'ReactJS',
        'Typescript',
        'Redux',
        'Redux-Toolkit',
        'emotion',
      ],
      back: ['firebase'],
    },
    detailedDescription:
      '블라인드를 벤치마킹 하여 자영업자, 비정규직 등의 블라인드 가입이 어려운 유저를 위한 익명 커뮤니티 입니다.',
    whatILearned: [
      'NextJS에서 제공하는 서버사이드 동작 함수인 getServerSideProps, getInitialProps에 대한 흐름을 알게 되었습니다.',
      'NextJS에서 제공하는 API라우팅 기능을 이용하여 프론트 서버단에서 실행 불가능한 라이브러리의 사용, CORS 회피를 구현해보며 사용법을 알게 되었습니다.',
      '협업을 하며 재사용이 쉽게 가능한 컴포넌트와 함수의 설계, Redux의 초기 구조 설계의 중요성을 알게 되었습니다.',
      'Git으로 협업을 하며 Merge, Conflict, Revert, Branch분리 등 Git의 여러 기능과 에러를 경험해보았습니다.',
      'ReduxToolKit과 같이 사용한 Redux의 HYDRATE 액션이 어떻게 동작하는지 간략하게 알게 되었습니다.',
    ],
  },
  {
    with: '팀',
    title: 'ShowMeTheFeedBack',
    description:
      'HTML,CSS,JAVASCRIPT 만으로 만든 토이프로젝트 피드백 서비스 입니다',
    isDeploy: false,
    githubLink: 'github.com/cy3589/ShowMeTheFeedback',
    thumbnailUrl: '/show-me-the-feedback/show-me-the-feedback-thumbnail.png',
    dependencies: {
      front: ['HTML', 'CSS', 'JAVASCRIPT'],
      back: ['NodeJS', 'Express', 'MongoDB', 'Mongoose'],
    },
    images: [
      '/show-me-the-feedback/show-me-the-feedback-image0.png',
      '/show-me-the-feedback/show-me-the-feedback-image1.png',
      '/show-me-the-feedback/show-me-the-feedback-image2.png',
    ],
    detailedDescription:
      '토이프로젝트를 업로드 하고 이에 대한 피드백을 주고받을 수 있는 웹 서비스 입니다.',
    whatILearned: [
      '프레임워크 없이 순수 자바스크립트만으로 재사용성을 갖는 설계 방법을 간략히 알게 되었습니다.',
      'DOM객체를 직접 제어하여 자바스크립트만으로 페이지를 변화시키는 여러 방법을 알게 되었습니다.',
      'MongoDB의 구조와 사용법을 간략히 알게 되었습니다.',
    ],
  },
  {
    with: '팀',
    title: '오늘의집',
    description:
      '오늘의집의 클론 프로젝트이며 현재 진행중이고 store 페이지부터 진행중입니다.',
    isDeploy: true,
    deployLink: 'o-house-clone.cy3589.com',
    githubLink: 'github.com/cy3589/o-house-clone',
    thumbnailUrl: '/o-house/o-house-thumbnail.jpg',
    dependencies: {
      front: ['NextJS'],
      back: ['오늘의집 API'],
    },
    images: [
      '/o-house/o-house-image0.png',
      '/o-house/o-house-image1.png',
      '/o-house/o-house-image2.jpg',
      '/o-house/o-house-image3.jpg',
    ],
    detailedDescription:
      '오늘의집 사이트의 네트워크 요청을 기반으로 분석해보니 API가 오픈되어 있는 것을 확인하여 진행해보고있는 오늘의집 클론 프로젝트 입니다. 미구현된 기능이 다수 존재하지만 지속적으로 보완중입니다.',
    whatILearned: [
      'NextJS의 api라우팅 기능을 이용하여 CORS에러 회피를 구현하며 api라우팅 사용법을 알게 되었습니다.',
      'masonic 라이브러리를 이용한 돔 가상화의 구현, 라이브러리 사용법, 성능상 이점 등을 알게 되었습니다.',
    ],
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CY-Portfolio</title>
        <meta name="description" content="CY-Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Section color="white" backgroundImage="/home_bg_2.jpg"> */}
        <Section
          color="white"
          // backgroundImage="/home_bg.png"
          backgroundImage="/home_bg.jpg"
          paddingTop="7.5vh"
        >
          <div>
            <FanSpinIcon />
            <SectionTitle>
              배움의 욕심이 많고
              <br /> 항상 노력하는
            </SectionTitle>
            <h2>신입 프론트엔드 개발자 정찬영 입니다.</h2>
            {me && (
              <ContactsWrapper>
                <ContactWrapper>
                  {Object.entries(me).map(
                    ([key, value]) =>
                      key !== 'mePr' && (
                        <div className="contact" key={key}>
                          <span>{key[0].toUpperCase() + key.slice(1)}: </span>
                          <span>{value}</span>
                        </div>
                      ),
                  )}
                </ContactWrapper>
              </ContactsWrapper>
            )}
          </div>
        </Section>
        <Section textAlign="left">
          <SectionTitle>About Me</SectionTitle>
          <ProfileImageWrapper>
            <div>
              <Image
                src="/profile-image.jpg"
                alt="profile-image"
                layout="fill"
                objectFit="contain"
                unoptimized
              />
            </div>
          </ProfileImageWrapper>
          <div>
            <FirstPrH1>
              🙍‍♂️ 안녕하세요! <br />
              저는 웹 프론트 엔드 개발자에 지원합니다.
            </FirstPrH1>
            <Ul>
              {me.mePr.map((pr) => (
                <li
                  key={pr}
                  dangerouslySetInnerHTML={{
                    __html: pr.toString().replace(/\\n/g, '<br />'),
                  }}
                />
              ))}
            </Ul>
          </div>
        </Section>
        <Section backgroundColor="#eeeeee" height="100%">
          <SectionTitle>Skills</SectionTitle>
          <Ul>
            {skills.map((v) => {
              const regex = /`.*?`/g;
              const matchedWords = v.match(regex);
              if (matchedWords && matchedWords.length > 0) {
                let newText = v;
                for (let i = 0; i < matchedWords.length; i += 1) {
                  newText = newText
                    .toString()
                    .replace(
                      matchedWords[i],
                      `<code>${matchedWords[i]
                        .toString()
                        .replace(/`/g, '')}</code>`,
                    );
                }
                return (
                  <li
                    key={v}
                    dangerouslySetInnerHTML={{
                      __html: newText,
                    }}
                  />
                );
              }
              return <li key={v}>{v}</li>;
            })}
          </Ul>
          <MainSkillsWrapper>
            <MainSkillsH1>Main Skills</MainSkillsH1>
            <SkillImagesWrapper>
              {mySkills.map(({ src, alt }) => (
                <SkillImageWrapper key={alt}>
                  <SkillImage
                    src={src}
                    alt={alt}
                    objectFit="cover"
                    layout="fill"
                    unoptimized
                  />
                </SkillImageWrapper>
              ))}
            </SkillImagesWrapper>
          </MainSkillsWrapper>
        </Section>
        <Section>
          <SectionTitle>Portfolio </SectionTitle>
          <PortfolioCardsWrapper>
            {projects.map((portfolioData) => (
              <Portfolio
                key={portfolioData.title}
                portfolioData={portfolioData}
              />
            ))}
          </PortfolioCardsWrapper>
        </Section>
      </main>
      <Footer>
        <div>본 페이지는 상업적 목적이 아닌</div>
        <div> 개인 포트폴리오 공개용이며</div>
        <div>코드는 깃허브에 모두 공개되어 있습니다.</div>
        <div>NextJS와 Typescript로 제작되었습니다.</div>
        <br />
        <Link href="https://github.com/cy3589/portfolio" passHref>
          <GitHubFontAwesomeIcon icon={faGithub} size="5x" />
        </Link>
        <span>Github</span>
      </Footer>
    </div>
  );
};
export default Home;
