import styled from '@emotion/styled';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalProps, PortfolioProps } from '@interfaces/IndePageInterfaces';
import { useCallback, VFC, MouseEvent, KeyboardEvent } from 'react';
import Scrollbars from 'react-custom-scrollbars';

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

const PortfolitModa: VFC<ModalProps & PortfolioProps> = ({
  showModal,
  setShowModal,
  portfolioData: { title, dependencies },
  portfolioData,
}) => {
  const onClickInnerElement = useCallback(
    (e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation();
    },
    [],
  );
  const onCancelModal = useCallback(() => {
    document.body.classList.remove('no-scroll');
    setShowModal(false);
  }, [setShowModal]);
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
          <Scrollbars className="scroll-class" autoHide universal>
            <h1>{title}</h1>
            <div>
              <div>{portfolioData.with}프로젝트</div>
              <span>사용 언어 및 라이브러리</span>
              {dependencies &&
                Object.entries(dependencies).map(([key, value]) => (
                  <div key={key}>
                    <span>{key[0].toUpperCase() + key.slice(1)}: </span>
                    <span>{value}</span>
                  </div>
                ))}
            </div>
          </Scrollbars>
        </div>
      </ModalInner>
    </ModalWrapper>
  );
};
export default PortfolitModa;
