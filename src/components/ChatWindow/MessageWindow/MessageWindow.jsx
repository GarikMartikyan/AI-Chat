import classes from "./MessageWindow.module.scss";
import Message from "./Messages/Message.jsx";
import { useChatData } from "../../../assets/Contexts/MessageContext.jsx";
import scrollMyMessageToTop from "../../../assets/functionality/scrollMyMessageToTop.js";

export default function MessageWindow() {
  const { chat } = useChatData();

  const isThereMessages = Boolean(chat.length);
  const welcome = <div className={classes.welcome}>How can I help you?</div>;
  scrollMyMessageToTop(chat);

  return (
    <div className={classes.scrollWrraper}>
      <section className={classes.container}>
        {isThereMessages &&
          chat.map((item, _, array) => {
            const animate =
              item.id === array[chat.length - 1]["id"] && item.role === "user";
            return (
              <Message
                id={item.id}
                children={item.parts}
                role={item.role}
                key={item.id}
                sended={item.date}
                showAnimation={animate}
              />
            );
          })}
        {!isThereMessages && welcome}
      </section>
    </div>
  );
}
