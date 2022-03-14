import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Section = styled.section<{
  color?: string;
  backgroundColor?: string;
  height?: string;
  backgroundImage?: string;
  paddingTop?: string;
  textAlign?: string;
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
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};
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
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;
const ModalUl = styled.ul`
  padding-right: 40px;
`;
const ModalCode = styled.code`
  font-weight: 600;
`;
const ModalCodeWrapper = styled.div`
  height: 24px;
`;
const ModalCodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;
const ModalLangKeyWrapper = styled.div`
  font-weight: 600;
  width: 48px;
`;
const ModalLangWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ModalCancelButtonIcon = styled(FontAwesomeIcon)`
  padding: 4px 8px 4px 8px;
`;
const DivWidth100Height100 = styled.div`
  width: 100%;
  height: 100%;
`;
const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FirstPrH1 = styled.h1`
  font-size: 20px;
  padding: 0 16px 0 16px;
`;
const MainSkillsH1 = styled.h1`
  width: 100%;
  text-align: left;
  margin-left: 8px;
`;
const Footer = styled.footer`
  background-color: rgb(140, 120, 114);
  height: 240px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & div {
    font-weight: 600;
    font-size: larger;
  }
`;
const GitHubFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: 0.3s;
  color: rgba(229, 229, 229, 1);
  :hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.08);
  }
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
  ContactsWrapper,
  SectionTitle,
  PortfolioCardsWrapper,
  ModalWrapper,
  ModalInner,
  CancelButton,
  PortfolioCardWrapper,
  ProjectThumbnailWrapper,
  ProjectImageWrapper,
  ProjectImagesWrapper,
  ModalUl,
  ModalCode,
  ModalCodeWrapper,
  ModalCodesWrapper,
  ModalLangKeyWrapper,
  ModalLangWrapper,
  ModalCancelButtonIcon,
  DivWidth100Height100,
  FirstPrH1,
  MainSkillsH1,
  Footer,
  GitHubFontAwesomeIcon,
};
