export const MESSAGE_STATE_IS_CREATE = 'MESSAGE_STATE_IS_CREATE';
export const MESSAGE_STATE_IS_EDIT = 'MESSAGE_STATE_IS_EDIT';
export const MESSAGE_STATE_IS_REPLY = 'MESSAGE_STATE_IS_REPLY';
export const MESSAGE_STATE_IS_FORWARD = 'MESSAGE_STATE_IS_FORWARD'; ///////////////////////////
export const MESSAGE_STATE_IS_SELECT = 'MESSAGE_STATE_IS_SELECT';
export const MESSAGE_STATE_IS_EMPTY = 'MESSAGE_STATE_IS_EMPTY';



export const messageStateIsCreate = () => ({
  type: MESSAGE_STATE_IS_CREATE
});

export const messageStateIsEdit = () => ({
  type: MESSAGE_STATE_IS_EDIT
});

export const messageStateIsReply = () => ({
  type: MESSAGE_STATE_IS_REPLY
});

export const messageStateIsForward = () => ({
  type: MESSAGE_STATE_IS_FORWARD
});

export const messageStateIsSelect = () => ({
  type: MESSAGE_STATE_IS_SELECT
});

export const messageStateIsEmpty = () => ({
  type: MESSAGE_STATE_IS_EMPTY
});