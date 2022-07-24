import classnames from 'classnames';

const cancelGroup = (currentlySelectedMessages) => classnames({
  'hide': currentlySelectedMessages.length === 0,
  'cancel-group': currentlySelectedMessages.length !== 0
  }
)

const selectedMessagesAmount = (messageState) => classnames(
  'selected-messages-amount', {
    'hide': messageState !== 'select'
  }
)

export {cancelGroup, selectedMessagesAmount}