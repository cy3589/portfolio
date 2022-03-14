import styled from '@emotion/styled';
import { useState, VFC } from 'react';
import Image from 'next/image';
import { PortfolioProps } from '@interfaces/IndePageInterfaces';
import PortfolitModal from '@components/PortfolitModal';

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

const Portfolio: VFC<PortfolioProps> = ({ portfolioData }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <PortfolioCardWrapper
        key={portfolioData.title}
        onClick={() => {
          document.body.classList.add('no-scroll');
          setShowModal(true);
        }}
      >
        <ProjectThumbnailWrapper>
          <div>
            <Image
              src={portfolioData.thumbnailUrl}
              alt="profile-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </ProjectThumbnailWrapper>
        <h2>{portfolioData.title}</h2>
        <p>{portfolioData.description}</p>
      </PortfolioCardWrapper>
      <PortfolitModal
        showModal={showModal}
        setShowModal={setShowModal}
        portfolioData={portfolioData}
      />
    </>
  );
};
export default Portfolio;
