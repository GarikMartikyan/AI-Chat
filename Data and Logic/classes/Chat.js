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

  #chatMessage(ChatMessage, SetMessage) {
    const chatMessage = new MessageClass(this.#id++, ChatMessage, "model");
    this.history.push(chatMessage);
    SetMessage(() => [...this.history]);

    console.log(chatMessage.parts);
    console.log(this.history);
  }

  async #messageToServer(Message, SetMessage) {
    console.log("Message render..."); ///////////////////////////

    const chat = await this.#model.startChat({
      history: this.history,
    });
    const result = await chat.sendMessage(Message);
    const response = await result.response;
    const chatMessage = response.text();
    return [chatMessage, SetMessage];
  }

  deliverMessage(MyMessageText, SetMessage) {
    this.#messageToServer(MyMessageText, SetMessage)
      .then((args) => {
        this.#chatMessage(...args);
      })
      .catch(() => {
        console.error(
          "Something went wrong. This probably happened because you sent a new question without receiving the previous answer.",
        ); ///////////////////////////
        const reload = alert("Something went wrong. \nPlease reload page");
        window.location.reload();
      });

    const myMessage = new MessageClass(this.#id++, MyMessageText, "user");
    this.history.push(myMessage);
    SetMessage(() => this.history);
  }
}
