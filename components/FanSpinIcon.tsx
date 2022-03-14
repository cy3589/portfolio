import { VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';

interface FanSpinIconProps {
  color?: 'string';
}
const FanSpinIcon: VFC<FanSpinIconProps> = ({ color = 'white' }) => {
  return (
    <FontAwesomeIcon
      icon={faFan}
      spin
      color={color}
      style={{
        animationDirection: 'reverse',
        animationDuration: '5s',
        fontSize: '7rem',
      }}
    />
  );
};
export default FanSpinIcon;
