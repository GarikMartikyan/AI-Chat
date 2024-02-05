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
// chat.deliverMessage("Do you remember context?");
// console.log(chat);
export default chat;
