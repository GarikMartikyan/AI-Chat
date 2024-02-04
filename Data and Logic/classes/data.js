import Chat from "./Chat.js";

class Data {
  #data = [];

  getData() {
    return this.#data;
  }

  createChat(ChatName) {
    const id = this.#data.length;

    const chat = new Chat(id, ChatName);
    this.#data.push(chat);
    return chat;
  }
}

const data = new Data();
const chat = data.createChat("First Chat");
export default chat;
