import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "../components/Avatar";
import DateOptions from "../components/DateOptions";

const config = {
  botName: "Student Info System",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      widget: "gotit",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#F4F4F4",
      
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: { botAvatar: (props) => <Avatar {...props} /> },
  widgets:[{
    widgetName: "gotit",
   widgetFunc: (props) => <div className="w-full flex justify-center">
     <button {...props} className="p-2 border border-solid border-cyan-500 rounded-md text-cyan-500 font-bold" onClick={props.actionProvider.handleGotIt}>Got it!</button>,
    </div>
  },{widgetName:'pickslot',widgetFunc: (props)=><DateOptions {...props} />}]
};

export default config;
