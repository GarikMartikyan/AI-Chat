import classes from "./MessageWindow.module.scss";
import Message from "./Messages/Message.jsx";
import { useChatData } from "../../../assets/Contexts/messageContext.jsx";

export default function MessageWindow() {
  const { chat } = useChatData();

  const isThereMessages = Boolean(chat.length);
  const welcome = <div className={classes.welcome}>How can I help you?</div>;
  return (
    <section className={classes.container}>
      {isThereMessages &&
        chat.map((item) => {
          return (
            <Message key={item.id} children={item.parts} person={item.role} />
          );
        })}
      {!isThereMessages && welcome}
    </section>
  );
}
