import './IconButton.css';



const IconButton = ({ src, name, onClick, currentlySelectedMessages, currentUser, toggleMessageSearching, messageState }) => {

  const getHide = (name) => {
    switch(name) {
      case `left`:
      case `edit`:
        return `${currentlySelectedMessages.length !== 1 && 'hide'} ${messageState!=='select' ? 'hide' : ''}`;

      case `bin`:
      case `right`:
      case `cross`: 
        return `${currentlySelectedMessages.length === 0 && 'hide'} ${messageState!=='select' ? 'hide' : ''}`; 
      
      default:
        return '';
    }
  }

  const getIconEniqueClassNames = (name) => {
    switch(name) {
      case `cross`: 
        return `cross-icon`; 
      
      default:
        return '';
    }
  }

  const getWrapperEniqueClassNames = (name) => {
    switch(name) {
      case `cross`: 
        return `wrapper-cross-icon`; 
      
      default:
        return '';
    }
  }

  let hide = getHide(name);
  let iconEnique = getIconEniqueClassNames(name);
  let wrapperEnique = getWrapperEniqueClassNames(name);


  return (
    <div className={`${wrapperEnique}`} onClick={onClick}>
      <img 
        className={`any-icon ${currentUser === '' && toggleMessageSearching} ${iconEnique} ${hide}`}
        alt={`${name}-icon`}
        src={src}
      />
    </div>
  )
}

export default IconButton;