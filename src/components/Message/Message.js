import './Message.css';



const Message = ({id, value, onClick, time, edit, toggleSelectedState, isSelect}) => { //мб нужен selected?

    const messEdited = edit ? '(edited)' : '';

    // НЕ УДАЛЯТЬ ОРИГИНАЛЬНОЕ СООБЩЕНИЕ
    return (
        <div 
            id={id} 
            className={`message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}

            value={value} 
            onClick={onClick}
            >
            {value}
            <div className='message-time'>{time}{messEdited}</div>
        </div>
    )

    // const OneForwardedMessage = () => {

    //     return (
    //       <div 
    //         id={id} 
    //         className={`forward-message ${(isSelect) ? toggleSelectedState : 'hide'}-message`}
      
    //         value={value} 
    //       >
    //         <div className='message-with-vertical-line'>
    //             <div className='vertical-line'></div>
    //             <div className='reply-message'>
      
    //             <div className='message-info'>
    //               <div className='message-sender'>Darya Serikova</div>
    //               {/* <div className='date-and-time'>{convertedDate} at {replyMessage.time}</div> */}
    //               <div className='date-and-time'>29 May at 8:45</div>
    //             </div>
      
    //             {/* {replyMessage.value} */}
    //             Пересылаемое сообщение
      
    //             </div>
    //         </div>
    //       </div>
    //     )
    //   }



    // return (
    //     <div onClick={onClick} className={`wrapper-forward-messages ${(isSelect) ? toggleSelectedState : 'hide'}-message`}>
      
    //       <div className='value-forward-messages'>{value}</div>
      
    //       <OneForwardedMessage/>
    //       <OneForwardedMessage/>
    //       <OneForwardedMessage/>
      
    //       <div className='message-time'>{time}{messEdited}</div>
      
    //     </div>
    // )

}

export default Message;