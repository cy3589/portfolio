import styled from '@emotion/styled';
import Image from 'next/image';

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
const ModalWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%) scale(1);
  transition: 0.3s;
  opacity: 1;
  ${({ show }) =>
    show
      ? 'opacity: 1; transform: translate(-50%, -50%) scale(1);'
      : 'opacity: 0; transform: translate(-50%, -50%) scale(0);'};
`;
const ModalInner = styled.div`
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 14px;
  text-align: left;
  padding: 14px;
`;
const CancelButton = styled.button`
  position: absolute;
  margin-left: auto;
  right: 14px;
  background: #b0b0b0;
  border: 0;
  border-radius: 14px;
  cursor: pointer;
  z-index: 2;
`;

const PortfolioCardWrapper = styled.div`
  border: 4px solid #eee;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  background-color: rgba(238, 238, 238, 1);
  transform: scale(1);
  transition: 0.3s;
  overflow: hidden;
  :hover {
    background-color: rgba(238, 238, 238, 0.5);
    transform: scale(1.05);
  }
`;
const ProjectThumbnailWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  & > div {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }
`;
const ProjectImageWrapper = styled.div`
  border: 4px solid #b0b0b0;
  border-radius: 10px;
  overflow: hidden;
`;
const ProjectImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
export {
  Section,
  Ul,
  SkillImage,
  MainSkillsWrapper,
  SkillImageWrapper,
  SkillImagesWrapper,
  ProfileImageWrapper,
  ContactWrapper,
  SectionTitle,
  PortfolioCardsWrapper,
  ModalWrapper,
  ModalInner,
  CancelButton,
  PortfolioCardWrapper,
  ProjectThumbnailWrapper,
  ProjectImageWrapper,
  ProjectImagesWrapper,
};
