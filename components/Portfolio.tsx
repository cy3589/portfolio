import { useCallback, useEffect, useState, VFC } from 'react';
import Image from 'next/image';
import { PortfolioProps } from '@interfaces/IndePageInterfaces';
import PortfolitModal from '@components/PortfolitModal';
import { useContextHook } from '@hooks/useContextHook';
import {
  PortfolioCardWrapper,
  ProjectThumbnailWrapper,
} from '@styles/IndexStyled';

const Portfolio: VFC<PortfolioProps> = ({ portfolioData }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { getter, setter } = useContextHook();
  const onClickCard = useCallback(() => {
    setter(window.scrollY);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    setShowModal(true);
  }, [setter]);
  useEffect(() => {
    if (!showModal) {
      window.scrollTo({ top: getter() });
    }
  }, [getter, showModal]);
  return (
    <>
      <PortfolioCardWrapper key={portfolioData.title} onClick={onClickCard}>
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
