import MessageClass from "./Message.js";

export default class Chat {
  #model;
  #id = 0;

  constructor(Id, Name, Model) {
    this.id = Id;
    this.name = Name;
    this.created = new Date().valueOf();
    this.history = [];
    this.#model = Model;
  }

  deliverMessage(MyMessage, SetMessage) {
    console.log("History inside Delivery", this.history);
    this.#messageToServer(MyMessage, SetMessage).catch(() => {
      const errMessaage =
        "Something went wrong. This probably happened because you sent a new question without receiving the previous answer.";
      console.error(errMessaage);
      alert(errMessaage + "\nPlease reload page");
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
