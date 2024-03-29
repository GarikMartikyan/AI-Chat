import classes from "./MessageWindow.module.scss";
import Message from "./Messages/Message.jsx";
import scrollMyMessageToTop from "../../../assets/functionality/scrollMyMessageToTop.js";
import { usePageContext } from "../../../assets/Contexts/PageContext.jsx";
import Welcome from "./Welcome/Welcome.jsx";

export default function MessageWindow() {
  const { chatNow } = usePageContext();
  const chat = chatNow.history;

  scrollMyMessageToTop();
  const isThereMessages = Boolean(chat.length);

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
        {!isThereMessages && <Welcome />}
      </section>
    </div>
  );
}
