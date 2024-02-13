import MessageClass from "./Message.js";
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Access your API key (see "Set up your API key" above)

export default class Chat {
  #id = 0;
  #genAI = new GoogleGenerativeAI("AIzaSyBMdhp4A6kwwJfM-axyI99niGkuIH2fo3s");
  #model = this.#genAI.getGenerativeModel({ model: "gemini-pro" });

  constructor(Id, Name) {
    this.id = Id;
    this.name = Name;
    this.date = new Date().valueOf();
    this.history = [];
  }

  deliverMessage(MyMessage, SetMessage, SetName) {
    console.log(this.name);
    this.#messageToServer(MyMessage, SetMessage, SetName)
      .then((message) => {
        if (!message.trim().length) {
          const containue = confirm(
            "You have not received the chat's answer. This may be a bug that will affect further chat conversations. Refresh the page?",
          );
          if (containue) window.location.reload();
        }
      })
      .catch((e) => {
        console.error("Something went wrong.\n" + e);
        alert("Something went wrong.\nPlease reload page");
        window.location.reload();
      });
    const myMessage = new MessageClass(this.#id++, MyMessage, "user");
    this.history.push(myMessage);
    SetMessage(() => [...this.history]);
  }

  #chatMessage(ChatMessage) {
    const chatMessage = new MessageClass(this.#id++, ChatMessage, "model");
    this.history.push(chatMessage);
  }

  async #messageToServer(Message, SetMessage, SetName) {
    console.log("Message render..."); ///////////////////////////
    const chat = this.#model.startChat({
      history: this.history,
    });
    const result = await chat.sendMessage(Message);
    const response = await result.response;
    const chatMessage = response.text();
    this.#chatMessage(chatMessage);
    SetMessage(() => [...this.history]);
    console.log(this.history);
    return chatMessage;
  }

  renameChat(Name) {
    this.name = Name;
    return this;
  }
}
