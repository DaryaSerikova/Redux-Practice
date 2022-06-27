import { getCorrectFormOfWord } from "../../utils/getCorrectFormOfWord";
import { getTruncatedValue } from "../../utils/getTruncatedValue";



const MiniMessage = ({ messageState, currentlySelectedMessages }) => {

  let truncatedValue = !(messageState === 'reply') //Усеченное значение сообщения
  ? '' 
  : !(Boolean(currentlySelectedMessages[0])&&currentlySelectedMessages[0]!=={}) 
    ? ''
    : !(currentlySelectedMessages[0].value.length > 25)
      ? currentlySelectedMessages[0].value
      : getTruncatedValue(currentlySelectedMessages[0].value)


  // let correctFormOfWord = getCorrectFormOfWord(currentlySelectedMessages, 'ru');
  let correctFormOfWord = getCorrectFormOfWord(currentlySelectedMessages, 'en'); //'сообщений'


  const MiniReplyMessage = () => {
    return (
      <div className={`mini-reply-or-forwarded-messages ${messageState === 'reply' ? '' : "hide"}`}>
      <div className='message-with-vertical-line'>
        <div className='vertical-line'></div>
        <div className='reply-message'>
  
        <div className='message-info'>
          <div className='message-sender'>Darya Serikova</div>
        </div>

          {truncatedValue}
  
        </div>
      </div>
    </div>
    )
  }


  const MiniForwardedMessage = () => {
    return (
      <div className={`mini-reply-or-forwarded-messages ${messageState === 'forward' ? '' : "hide"}`}>
        <div className='forwarded-messages-info'>
          <div className='forwarded-messages-item-is-amount'>{currentlySelectedMessages.length}</div>
          <div className='forwarded-messages-item-is-message'>
          
          {/* сообщений */}
          {correctFormOfWord}

          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      <MiniReplyMessage />
      <MiniForwardedMessage />
    </>
  )
}

export default MiniMessage;