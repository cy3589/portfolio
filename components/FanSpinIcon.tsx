import { VFC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faDiceD20 } from '@fortawesome/free-solid-svg-icons';

interface FanSpinIconProps {
  color?: 'string';
}
const FanSpinIcon: VFC<FanSpinIconProps> = ({ color = 'white' }) => {
  return (
    <FontAwesomeIcon
      // icon={faFan}
      icon={faDiceD20}
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
const CircleNode: VFC<FanSpinIconProps> = ({ color = 'white' }) => {
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
export { CircleNode };
