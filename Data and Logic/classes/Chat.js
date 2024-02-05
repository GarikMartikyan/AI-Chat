import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)
import MessageClass from "./Message.js";

export default class Chat {
  #genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");
  #model = this.#genAI.getGenerativeModel({ model: "gemini-pro" });
  #id = 0;

  constructor(Id, Name) {
    this.id = Id;
    this.name = Name;
    this.created = new Date().valueOf();
    this.history = [];
  }

  deliverMessage(MyMessage, SetMessage) {
    console.log("History inside Delivery", this.history);
    this.#messageToServer(MyMessage, SetMessage);
    const myMessage = new MessageClass(this.#id++, MyMessage, "user");
    this.history.push(myMessage);
    SetMessage(() => [...this.history]);
  }

  #chatMessage(ChatMessage) {
    // this.history.pop();
    const chatMessage = new MessageClass(this.#id++, ChatMessage, "model");
    this.history.push(chatMessage);
  }

  async #messageToServer(Message, SetMessage) {
    console.log("Message render..."); ///////////////////////////
    const chat = this.#model.startChat({
      history: this.history,
      // generationConfig: { maxOutputTokens: 500 },
    });
    const result = await chat.sendMessage(Message);
    const response = await result.response;
    const text = response.text();
    this.#chatMessage(text);
    console.log(text);
    console.log("End");
    SetMessage(() => [...this.history]);
    console.log(this.history);

    //////////////////setfunc(this.history)
  }
}
