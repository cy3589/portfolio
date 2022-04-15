import { VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const FontAwesomeFanSpinIconStyled = styled(FontAwesomeIcon)`
  animation-direction: reverse;
  animation-duration: 5s;
  font-size: 7rem;
`;

interface FanSpinIconProps {
  color?: 'string';
}
const FanSpinIcon: VFC<FanSpinIconProps> = ({ color = 'white' }) => {
  return (
    <FontAwesomeFanSpinIconStyled
      // icon={faFan}
      icon={faDiceD20}
      spin
      color={color}
    />
  );
};
const CircleNode: VFC<FanSpinIconProps> = ({ color = 'white' }) => {
  return <FontAwesomeFanSpinIconStyled icon={faFan} spin color={color} />;
};
export default FanSpinIcon;
export { CircleNode };
