/* eslint-disable react/no-danger */
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalProps, PortfolioProps } from '@interfaces/IndePageInterfaces';
import {
  ModalWrapper,
  ModalInner,
  CancelButton,
  ProjectThumbnailWrapper,
  ProjectImageWrapper,
  ProjectImagesWrapper,
} from '@styles/IndexStyled';
import {
  useCallback,
  VFC,
  MouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  useEffect,
} from 'react';
import Scrollbars from 'react-custom-scrollbars';
import Image from 'next/image';

const PortfolitModa: VFC<ModalProps & PortfolioProps> = ({
  showModal,
  setShowModal,
  portfolioData,
}) => {
  const onClickInnerElement = useCallback(
    (e: MouseEvent<HTMLDivElement> | ReactKeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );
  const onCancelModal = useCallback(() => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    setShowModal(false);
  }, [setShowModal]);
  const onEscPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    },
    [setShowModal],
  );
  useEffect(() => {
    document.addEventListener('keyup', onEscPress);
    return () => {
      document.removeEventListener('keyup', onEscPress);
    };
  }, [onEscPress]);
  return (
    <ModalWrapper
      show={showModal}
      onClick={onCancelModal}
      onScroll={(e) => {
        e.stopPropagation();
      }}
    >
      <ModalInner
        onClick={onClickInnerElement}
        onKeyDown={onClickInnerElement}
        tabIndex={0}
        role="button"
      >
        <CancelButton onClick={onCancelModal}>
          <FontAwesomeIcon
            icon={faXmark}
            size="4x"
            style={{ padding: '4px 8px 4px 8px' }}
          />
        </CancelButton>
        <div style={{ width: '100%', height: '100%' }}>
          <Scrollbars
            className="scroll-class"
            autoHide
            universal
            style={{ margin: 0 }}
          >
            <h1>{portfolioData.title}</h1>
            <div>
              <h3>{portfolioData.with}프로젝트</h3>
              <h4>사용 언어 및 라이브러리</h4>
              {portfolioData.dependencies &&
                Object.entries(portfolioData.dependencies).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      style={{ display: 'flex', marginBottom: '10px' }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          width: '48px',
                        }}
                      >
                        {key[0].toUpperCase() + key.slice(1)}:{' '}
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          marginBottom: '16px',
                        }}
                      >
                        {value.map((lang) => (
                          <div key={lang} style={{ height: '24px' }}>
                            <code style={{ fontWeight: 600 }}>{lang}</code>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              <div>
                <h3>Summary</h3>
                <span
                  dangerouslySetInnerHTML={{
                    __html: portfolioData.detailedDescription.replaceAll(
                      '\n',
                      '<br />',
                    ),
                  }}
                />
              </div>
              <div>
                <h3>Learned</h3>
                <ul style={{ paddingRight: '40px' }}>
                  {portfolioData.whatILearned.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </div>
              <ProjectImagesWrapper>
                {portfolioData.images ? (
                  portfolioData.images.map((src) => (
                    <ProjectThumbnailWrapper key={src}>
                      <ProjectImageWrapper>
                        <Image
                          src={src}
                          alt="profile-image"
                          layout="fill"
                          objectFit="cover"
                        />
                      </ProjectImageWrapper>
                    </ProjectThumbnailWrapper>
                  ))
                ) : (
                  <ProjectThumbnailWrapper>
                    <ProjectImageWrapper>
                      <Image
                        src={portfolioData.thumbnailUrl}
                        alt="profile-image"
                        layout="fill"
                        objectFit="cover"
                      />
                    </ProjectImageWrapper>
                  </ProjectThumbnailWrapper>
                )}
              </ProjectImagesWrapper>
            </div>
          </Scrollbars>
        </div>
      </ModalInner>
    </ModalWrapper>
  );
};
export default PortfolitModa;
