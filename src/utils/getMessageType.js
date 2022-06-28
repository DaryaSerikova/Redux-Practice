export const getMessageType = (mess)  => {

  let message = mess;
  // console.log('(getMessageType) message', message)

  switch(true) {
    case ((message.message === undefined) && (message.messages === undefined)):
      return 'message';

    case ((message.message !== undefined) && (message.message.message === undefined) && (message.message.messages === undefined)):
      return 'reply';

    case (message.messages !== undefined):
      return 'forward';

    case ((message.message.message === undefined) && (message.message.messages !== undefined)): 
      return 'reply(forward)';

    case ((message.message.message !== undefined) && (message.message.messages === undefined)):
      return 'reply(reply)';


    // case ((message.messages !== undefined) && message.messages[0])

    // forward(reply)
    // forward(forward)
  }
}