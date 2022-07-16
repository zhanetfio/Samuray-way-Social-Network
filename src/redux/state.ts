export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: Array<PostType>
}
export type MessagePageType = {
    dialogData: Array<DialogsType>
    messageData: Array<MessageType>
}
/*
export type SidebarType = {}
*/

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}

let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi,how are you?', likesCount: 5},
            {id: 1, message: "It's my first post", likesCount: 7},
            {id: 1, message: "I like React!", likesCount: 10}
        ]
    },
    messagesPage: {
        dialogData: [
            {id: 1, name: 'Mark'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Kristi'},
            {id: 4, name: 'Helen'},
        ],
        messageData: [
            {id: 1, message: 'Hi yo!'},
            {id: 1, message: 'How are you'},
            {id: 1, message: 'Good night!'},
            {id: 1, message: 'Hello!'},
        ]
    },
}
export default state