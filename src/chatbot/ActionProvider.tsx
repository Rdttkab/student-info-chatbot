import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it!",{});

    const botMessage = createChatBotMessage("Pick a slot !!",{ widget: "pickslot",delay: 1000});


    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,userMessage, botMessage],
    }));
  };



  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleGotIt },
        });
      })}
    </>
  );
};

export default ActionProvider;
