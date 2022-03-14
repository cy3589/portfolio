/* eslint-disable react/no-danger */
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ModalProps, PortfolioProps } from '@interfaces/IndePageInterfaces';
import {
  ModalWrapper,
  ModalInner,
  CancelButton,
  ProjectThumbnailWrapper,
  ProjectImageWrapper,
  ProjectImagesWrapper,
  ModalUl,
  ModalCode,
  ModalCodesWrapper,
  ModalCodeWrapper,
  ModalLangKeyWrapper,
  ModalLangWrapper,
  ModalCancelButtonIcon,
  DivWidth100Height100,
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
          <ModalCancelButtonIcon icon={faXmark} size="4x" />
        </CancelButton>
        <DivWidth100Height100>
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
                    <ModalLangWrapper key={key}>
                      <ModalLangKeyWrapper>
                        {key[0].toUpperCase() + key.slice(1)}:{' '}
                      </ModalLangKeyWrapper>
                      <ModalCodesWrapper>
                        {value.map((lang) => (
                          <ModalCodeWrapper key={lang}>
                            <ModalCode>{lang}</ModalCode>
                          </ModalCodeWrapper>
                        ))}
                      </ModalCodesWrapper>
                    </ModalLangWrapper>
                  ),
                )}
              <div>
                <h3>Summary</h3>
                <span
                  dangerouslySetInnerHTML={{
                    __html: portfolioData.detailedDescription
                      .toString()
                      .replace(/\\n/g, '<br />'),
                  }}
                />
              </div>
              <div>
                <h3>Learned</h3>
                <ModalUl>
                  {portfolioData.whatILearned.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ModalUl>
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
                          objectFit="contain"
                          unoptimized
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
                        unoptimized
                      />
                    </ProjectImageWrapper>
                  </ProjectThumbnailWrapper>
                )}
              </ProjectImagesWrapper>
            </div>
          </Scrollbars>
        </DivWidth100Height100>
      </ModalInner>
    </ModalWrapper>
  );
};
export default PortfolitModa;
