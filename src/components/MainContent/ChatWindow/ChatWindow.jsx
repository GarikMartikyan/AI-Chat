import classes from "./ChatWindow.module.scss";
import Message from "./Messages/Message.jsx";

export default function ChatWindow() {
  return (
    <div className={classes.container}>
      <Message person={"user"} />
      <Message person={"chat"} />
      <Message person={"user"} />
      <Message person={"chat"} />
      <Message person={"user"} />
      <Message person={"chat"} />
      <Message person={"user"} />
      <Message person={"chat"} />
      <Message person={"user"} />
      <Message person={"chat"} />
      <Message person={"user"} />
      <Message person={"chat"} />
    </div>
  );
}
