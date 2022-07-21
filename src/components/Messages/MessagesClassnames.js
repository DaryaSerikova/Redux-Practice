import classnames from 'classnames';

const checkmarkIcon = (messageState, isSelect, toggleSelectedState) => classnames(
  'checkmark-icon', {
    'hide': !isSelect || isSelect && (messageState==='reply'||messageState==='forward'),
    [`${toggleSelectedState}-checkmark-icon`]: isSelect && !(messageState==='reply'||messageState==='forward')}
  );

const wrapperCircle = (animationState, messageState, isSelect) => classnames(
  'wrapper-circle', {[
    `circle-animation-${animationState}`]: animationState === 'start', 
    'space-between': messageState === 'select', 
    'hide': !(!isSelect && (messageState === 'select'))} 
  )

export {checkmarkIcon, wrapperCircle}