import MessageClass from "./Message.js";

export default class Chat {
  #model;
  #id = 0;

  constructor(Id, Name, Model) {
    this.id = Id;
    this.name = Name;
    this.date = new Date().valueOf();
    this.history = [];
    this.#model = Model;
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
}
