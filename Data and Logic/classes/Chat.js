import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)
import Message from "./Message.js";

export default class Chat {
  #genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");
  #model = this.#genAI.getGenerativeModel({ model: "gemini-pro" });

  constructor(Id, Name) {
    this.id = Id;
    this.name = Name;
    this.created = new Date().valueOf();
    this.history = [];
  }

  myMessage(MyMessage, SetMessage) {
    this.#messageToServer(MyMessage, SetMessage);
    const id = this.history.length;
    const myMessage = new Message(id, MyMessage, "user");
    this.history.push(myMessage);
  }

  #chatMessage(ChatMessage) {
    const id = this.history.length;
    const chatMessage = new Message(id, ChatMessage, "model");
    this.history.push(chatMessage);
  }

  async #messageToServer(Message, SetMessage) {
    console.log("Message render..."); ///////////////////////////
    const chat = this.#model.startChat({
      history: [...this.history],
      generationConfig: { maxOutputTokens: 100 },
    });
    const result = await chat.sendMessage(Message);
    const response = await result.response;
    const text = response.text();
    this.#chatMessage(text);
    console.log(text);
    console.log("End");

    //////////////////setfunc(this.history)
  }
}
