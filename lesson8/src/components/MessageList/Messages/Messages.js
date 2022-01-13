import { USERS } from "../../../utils/constant";
import { withProfileContext } from "../../../utils/ProfileContext";

export const Message = ({ author, text, name }) => {
  return (
    <div className={author === USERS.YOU ? "you-msg" : "bot-msg"}>
      {author === USERS.YOU ? name : author}: {text}
    </div>
  );
};

export default withProfileContext(Message);