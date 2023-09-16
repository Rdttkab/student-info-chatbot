import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "../components/Avatar";

const config = {
  botName: "Student Info System",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      widget: "options",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: { botAvatar: (props) => <Avatar {...props} /> },
};

export default config;
