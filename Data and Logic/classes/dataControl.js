import Chat from "./Chat.js";

class Data {
  #id = 0;
  #data = [];

  getData() {
    return this.#data;
  }

  createChat(ChatName = "New chat " + this.#id) {
    const chat = new Chat(this.#id++, ChatName);
    this.#data.push(chat);
    return chat;
  }
}

const dataControl = new Data();
dataControl.createChat("First chat");
const chatsList = dataControl.getData();
export { dataControl, chatsList };
