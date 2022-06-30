# Chat


### `Stack:`
React.js, Redux

### `Possibilities`
This chat can send a message, edit and remove a sent message.
Also chat has a sidebar with list of users. You can select any user and send message him.
User and message searchs are exist.
You can click on message and you can see settings: edit, select or remove message.
<ul>
    <li>- [x] Edit one message</li>
    <li>- [x] Remove message</li>
    <li>- [x] Select one message</li>
    <li>- [x] Select multiple messages</li>
    <li>- [x] Remove multiple messages</li>
    <li>- [x] Reply to one message</li>
    <li>- [x] Forward multiple messages</li>
    <li>- [x] Forward forwarded messages (as many times as you like)</li>
    <li>- [x] Reply to a reply message (as many times as you like)</li>
    <li>- [ ] Forward a reply message</li>
    <li>- [ ] Reply to forwarded messages</li>
</ul>



    // План
    // 1. по onClick на стрелочку скрыть все иконки в header'е ChatWindow
    // 2. messageStateIsReply
    // 3. Скрыть все признаки выбранного сообщения, но оставить в store
    // 4. Мини-версия replyMessage над панелью

    // При нажатии на кнопку отправить:
    // . Скрыть мини-версия replyMessage над панелью
    // replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'
    // resetSelectedMessages();
    // messageStateIsEmpty();
    // . reset панели
    // . reset выбранных сообщений

    
    // // Здесь начинается кусок для send при добавлении сообщения вместо бутафорного комментария
    // let replyMessage = currentlySelectedMessages[0]; // это от изначального варианта forward

    // replyOnMessageFromStore('Бутафорный комментарий к reply message', currentUser, false, false, replyMessage); //'Darya Serikova'
    // resetSelectedMessages();
    // messageStateIsEmpty();