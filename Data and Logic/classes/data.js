import Chat from "./Chat.js";

class Data {
  #id = 0;
  #data = [];

  getData() {
    return this.#data;
  }

  createChat(ChatName) {
    const chat = new Chat(this.#id, ChatName);
    this.#data.push(chat);
    return chat;
  }
}

const data = new Data();
const chat = data.createChat("First Chat");
export default chat;
