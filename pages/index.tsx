/* eslint-disable react/no-danger */
import FanSpinIcon from '@components/FanSpinIcon';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import Portfolio from '@components/Portfolio';

const mySkills: { src: string; alt: string }[] = [
  { src: '/reactjs-logo.png', alt: 'reactjs-logo' },
  { src: '/nextjs-logo.png', alt: 'nextjs-logo' },
  { src: '/redux-logo.jpg', alt: 'redux-logo' },
  { src: '/react-query-logo.svg', alt: 'react-query-logo' },
  { src: '/javscript-logo.svg', alt: 'javscript-logo' },
  { src: '/typescript-logo.svg', alt: 'typescript-logo' },
  { src: '/emotion-logo.png', alt: 'emotion-logo' },
];
const me: { phone: string; email: string } = {
  phone: '010-2102-3589',
  email: 'jcy3589@gmail.com',
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
const projects: {
  with: '개인' | '팀';
  title: string;
  description: string;
  thumbnailUrl: string;
  dependencies?: { front: string[]; back?: string[] };
  images?: string[];
}[] = [
  {
    with: '개인',
    title: 'NodeBird',
    description: 'NextJS를 기반으로 만든 SNS 웹 서비스 입니다',
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
  },
  {
    with: '개인',
    title: 'Sleact',
    description: 'NextJS를 기반으로 만든 슬랙의 클론코딩 입니다',
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
  },
  {
    with: '팀',
    title: 'Dokteuk',
    description: 'NextJS를 기반으로 만든 커뮤니티 입니다',
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
  },
  {
    with: '팀',
    title: 'ShowMeTheFeedBack',
    description:
      'HTML,CSS,JAVASCRIPT 만으로 만든 토이프로젝트 피드백 서비스 입니다',
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
  },
];
const Section = styled.section<{
  color?: string;
  backgroundColor?: string;
  height?: string;
  backgroundImage?: string;
  paddingTop?: string;
}>`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  ${({ color }) => color && `color: ${color}`};
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop}`};
  ${({ backgroundImage }) =>
    backgroundImage &&
    `background-image: url(${backgroundImage});background-size:cover`};
`;
const Ul = styled.ul`
  padding-right: 24px;
  text-align: left;
  & li {
    padding-bottom: 14px;
    font-size: 20px;
  }
`;
const SkillImage = styled(Image)`
  border-radius: 15%;
`;
const MainSkillsWrapper = styled.div`
  width: 100%;
  padding: 64px;
  max-width: 768px;
`;
const SkillImageWrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  height: 100%;
  position: relative;
`;
const SkillImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  gap: 24px;
  justify-content: center;
`;
const ProfileImageWrapper = styled.div`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
  & > div {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    & img {
      border-radius: 50%;
    }
  }
`;
const ContactWrapper = styled.div`
  text-align: left;
  & .contact {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
`;
const PortfolioCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
`;
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
          backgroundImage="/home_bg.png"
          paddingTop="7.5vh"
        >
          <div>
            <FanSpinIcon />
            <SectionTitle>
              책임감과 협동심이 많고
              <br /> 열정 가득한.
            </SectionTitle>
            <h2>신입 프론트엔드 개발자 정찬영 입니다.</h2>
            {me && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ContactWrapper>
                  {Object.entries(me).map(([key, value]) => (
                    <div className="contact" key={key}>
                      <span>{key[0].toUpperCase() + key.slice(1)}: </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </ContactWrapper>
              </div>
            )}
          </div>
        </Section>
        <Section style={{ textAlign: 'left' }}>
          <SectionTitle>About Me</SectionTitle>
          <ProfileImageWrapper>
            <div>
              <Image
                src="/profile-image.jpg"
                alt="profile-image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </ProfileImageWrapper>
          <div>
            <h1 style={{ fontSize: '20px', padding: '0 16px 0 16px' }}>
              🙍‍♂️ 안녕하세요! <br />
              저는 웹 프론트 엔드 개발자에 지원합니다.
            </h1>
            <Ul>
              <li>
                평소에 무언가 만드는 것을 좋아하며 &quot;왜?&quot; 라는 질문을
                자주 던집니다.
                <br /> 방대한 자료가 존재하며 질문과 답변이 활발한 IT 분야에
                매력를 느껴 공부하기 시작했습니다.
              </li>
              <li>
                최신 기술에 관심이 많습니다.
                <br />
                최신 기술이 나오면 기존 기술과 무엇이 다르며,
                <br />
                어떤 문제를 해결하기 위해 나온 것인지 답을 찾고 적용해 보는 것을
                좋아합니다.
              </li>
              <li>
                질문과 답변, 협업을 좋아합니다.
                <br /> 질문을 통해 문제를 해결할 수 있고,
                <br /> 답변을 통해 내가 알고있는 지식의 깊이를 재확인 할 수
                있다고 생각합니다.
                <br /> 질문과 답변으로 서로 성장하고, 협업으로 하나의 프로젝트를
                완성해 나가는 과정이 아름답다고 생각하고 있습니다.
              </li>
              <li>항상 배우는 자세로 어제보다 더 나은 개발자가 되겠습니다.</li>
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
                  newText = newText.replace(
                    matchedWords[i],
                    `<code>${matchedWords[i].replaceAll('`', '')}</code>`,
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
            <h1 style={{ width: '100%', textAlign: 'left', marginLeft: '8px' }}>
              Main Skills
            </h1>
            <SkillImagesWrapper>
              {mySkills.map(({ src, alt }) => (
                <SkillImageWrapper key={alt}>
                  <SkillImage
                    src={src}
                    alt={alt}
                    objectFit="cover"
                    layout="fill"
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
      <footer style={{ backgroundColor: '#7c797', color: '#fff' }}>
        <span>Footer입니다</span>
      </footer>
    </div>
  );
};

export default Home;
