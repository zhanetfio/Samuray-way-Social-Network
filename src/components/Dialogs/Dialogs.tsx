import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {MessagePageType} from "../../redux/state";

type DialogsPropsType={
    dialogs:MessagePageType
}

const Dialogs = (props:DialogsPropsType) => {

    let dialogsElement = props.dialogs.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)//нужно сделать импорт

    let messageElement = props.dialogs.messageData.map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div>
                {messageElement}
            </div>

        </div>
    );
};

export default Dialogs;