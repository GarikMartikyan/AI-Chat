import Chat from "./Chat.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)

class Data {
  #id = 0;
  #data = [];
  #genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");
  #model = this.#genAI.getGenerativeModel({ model: "gemini-pro" });

  getData() {
    return this.#data;
  }

  createChat(ChatName = "New Chat " + this.#id) {
    const chat = new Chat(this.#id++, ChatName, this.#model);
    this.#data.push(chat);
    return chat;
  }
}

const dataControl = new Data();
const chat = dataControl.createChat("First Chat");
const chatsList = dataControl.getData();
export { dataControl, chatsList };
