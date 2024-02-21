import Chat from "./Chat.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)

class Data {
  #id = 0;
  #genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");
  #model = this.#genAI.getGenerativeModel({ model: "gemini-pro" });
  #data = [new Chat(this.#id++, "First Chat", this.#model)];

  getData() {
    return this.#data;
  }

  createChat(ChatName = "New Chat") {
    const lastChatHistory = this.#data.at(-1).history;
    if (!lastChatHistory.length) return false;
    const chat = new Chat(this.#id++, ChatName, this.#model);
    this.#data.push(chat);
    return chat;
  }
}

const dataControl = new Data();
const chatsList = dataControl.getData();
export { dataControl, chatsList };
