import classes from "./MessageWindow.module.scss";
import Message from "./Messages/Message.jsx";
import { useChatData } from "../../../assets/Contexts/messageContext.jsx";

export default function MessageWindow() {
  const { chat } = useChatData();
  console.log("MessageWindowUpdate");
  console.log("Inside MessageWindow", chat);

  const isThereMessages = Boolean(chat.length);
  const welcome = <div className={classes.welcome}>How can I help you?</div>;
  return (
    <section className={classes.container}>
      {isThereMessages &&
        chat.map((item, _, array) => {
          const animate =
            item.id === array[chat.length - 1]["id"] && item.role === "user";

          return (
            <Message
              children={item.parts}
              person={item.role}
              key={item.id}
              showAnimation={animate}
            />
          );
        })}
      {!isThereMessages && welcome}
    </section>
  );
}
