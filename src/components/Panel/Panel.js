import './Panel.css';


export const Panel = () => {
  

  return( //Переписать на форму
    <div className='panel'> 
      <textarea className='textarea' placeholder='Напишите сообщение..'></textarea>
      <div className='wrapper-btn'>
        <button type="button" className='btn btn-success custom-btn'>Отправить</button>
      </div>
      
    </div>
  )
}