import Chat from "./Chat.js";

class Data {
  #id = 0;
  #data = [];

  getData() {
    return this.#data;
  }

  createChat(ChatName = "New Chat " + this.#id) {
    const chat = new Chat(this.#id++, ChatName);
    this.#data.push(chat);
    return chat;
  }
}

const dataControl = new Data();
const chat = dataControl.createChat("First Chat");
const chatsList = dataControl.getData();
export { chat as default, dataControl, chatsList };
