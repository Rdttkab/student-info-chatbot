import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "../components/Avatar";
import DateOptions from "../components/DateOptions";
import { JSX } from "react/jsx-runtime";

import Button from "../components/Button";
import SelectAge from "../components/SelectAge";

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
  customComponents: {
    botAvatar: (props: JSX.IntrinsicAttributes) => <Avatar {...props} />,
    botChatMessage: (props: JSX.IntrinsicAttributes & { message: string }) => (
      <div
        {...props}
        className="bg-[#F4F4F4] px-3 py-4 rounded-xl rounded-tl-none">
        <span>{props.message}</span>
      </div>
    ),
    userChatMessage: (props: JSX.IntrinsicAttributes & { message: string }) => (
      <div
        {...props}
        className="bg-[#B4EAF4] px-3 py-4 rounded-xl rounded-br-none">
        <span>{props.message}</span>
      </div>
    ),
  },
  widgets: [
    {
      widgetName: "gotit",
      widgetFunc: (
        props: JSX.IntrinsicAttributes & {
          actionProvider: { handleGotIt: () => void };
        }
      ) => (
        <Button
          {...props}
          text="Got it!"
          onClick={props.actionProvider.handleGotIt}
        />
      ),
    },
    {
      widgetName: "pickslot",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <DateOptions {...props} />
      ),
    },
    {
      widgetName: "selectAge",
      widgetFunc: (props: JSX.IntrinsicAttributes) => <SelectAge {...props} />,
    },
  ],
};

export default config;
