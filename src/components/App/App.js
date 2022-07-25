import PanelWithStore from '../../containers/PanelWithStore';
import ChatWindowWithStore from '../../containers/ChatWindowWithStore';
import SidebarWithStore from '../../containers/SidebarWithStore';
import './App.css';



const App = ({ toggleSettings, hideSettings, allStore, currentUser, mobileState }) => {
  
  // let heightWindow = window.screen.height;
  // let availHeightWindow = window.screen.availHeight;
  
  // console.log(' &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& heightWindow', heightWindow);
  // console.log(' %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% availHeightWindow', availHeightWindow);
  console.log(' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! document.body.clientHeight', document.body.clientHeight);
  console.log(' !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! document.body.clientWidth', document.body.clientWidth);
  
  let screenWidth = document.body.clientWidth;

  // (currentUser !== '' || allStore[`${currentUser}`] !== undefined)

  const onClick = (e) => {
    if (toggleSettings !== 'hide') {
      hideSettings();
    }
  }
//allStore[`${currentUser}`].length === 0)
  let personalStoreIsExist = (currentUser !== '' || allStore[`${currentUser}`] !== undefined)
  // let personalStoreIsExist = allStore[`${currentUser}`]

  return (
    <div className="App" onClick={onClick}>
      {(mobileState === 'users') && <SidebarWithStore/>}
      <div className={`wrapper-chat-window ${screenWidth > 900 ? '': mobileState === 'messages' ? '' : 'hide'}`}>
        <ChatWindowWithStore/>
        <PanelWithStore/>
      </div>
    </div>
  );
}

export default App;
