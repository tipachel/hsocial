import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Chats.module.css';
import Dialog from './Dialog/Dialog';
import MessageItem from './Message/MessageItem';

const Chats = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <MessageItem message={message.message} />);
    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);

    }
    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.dialogs__items}>
                    {dialogsElements}
                </div>
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={style.addMessage}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage} className={style.sendButton}></button>
                </div>
            </div>

        </div>
    );
};

export default Chats;