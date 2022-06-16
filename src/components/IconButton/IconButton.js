import './IconButton.css';



const IconButton = ({ src, name, onClick, currentForwardMessages, currentUser, toggleMessageSearching }) => {

  
  const getHide = (name) => {

    switch(name) {
      case `left`:
        return `${currentForwardMessages.length !== 1 && 'hide'}`;
      case `bin`:
        return `${currentForwardMessages.length === 0 && 'hide'}`;
      case `right`:
        return `${currentForwardMessages.length === 0 && 'hide'}`;
      case `search`: 
        return ''; 
      
      default:
        return '';
    }
  }

  let hide = getHide(name);


  return (
    <div onClick={onClick}>
      <img 
        className={`search-icon ${currentUser === '' && toggleMessageSearching} ${hide}`}
        alt={`${name}-icon`}
        src={src}
      />
    </div>
  )
}

export default IconButton;