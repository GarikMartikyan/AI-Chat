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

  deliverMessage(MyMessageText, SetMessage) {
    // debugger;
    this.#messageToServer(MyMessageText, SetMessage).catch(() =>
      console.error("sxal a axper"),
    );
    const myMessage = new MessageClass(this.#id++, MyMessageText, "user");
    this.history.push(myMessage);
    SetMessage(() => [...this.history]);
  }

  #chatMessage(ChatMessage) {
    const chatMessage = new MessageClass(this.#id++, ChatMessage, "model");
    this.history.push(chatMessage);
  }

  async #messageToServer(Message, SetMessage) {
    console.log("Message render..."); ///////////////////////////
    SetMessage(() => [...this.history]);
    const chat = await this.#model.startChat({
      history: this.history,
      // generationConfig: { maxOutputTokens: 500 },
    });

    // const typing = new MessageClass(this.#id++, "", "model");
    // this.history.push(typing);

    const result = await chat.sendMessage(Message);
    const response = await result.response;
    const chatMessage = response.text();
    this.#chatMessage(chatMessage);
    console.log(chatMessage);
    console.log("End");
    SetMessage(() => [...this.history]);
    console.log("History ", this.history);
  }
}
