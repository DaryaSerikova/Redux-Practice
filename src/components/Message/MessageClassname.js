import classnames from 'classnames';

const cnMessage = (toggleSelectedState, isSelect, messageState) => classnames(
  'message', {
      [`${toggleSelectedState}-message`]: (isSelect && (messageState!=='reply'&&messageState!=='forward')),
      'hide-message': !(isSelect && (messageState!=='reply'&&messageState!=='forward'))
  }
)

export {cnMessage} 