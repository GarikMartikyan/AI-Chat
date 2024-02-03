import classes from "./ChatWindow.module.scss";
import Message from "./Messages/Message.jsx";

export default function ChatWindow({ messages }) {
  messages = [1];

  const isThereMessages = Boolean(messages.length);
  const welcome = <div className={classes.welcome}>How can I help you?</div>;
  return (
    <section className={classes.container}>
      {isThereMessages && (
        <div>
          <Message person={"user"} />
          <Message person={"chat"} />
          <Message person={"user"} />
          <Message person={"chat"} />
          <Message person={"user"} />
          <Message person={"chat"} />
          <Message person={"user"} />
          <Message person={"chat"} />
        </div>
      )}
      {!isThereMessages && welcome}
    </section>
  );
}
