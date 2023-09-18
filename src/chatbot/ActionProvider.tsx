import React, { Dispatch, SetStateAction } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useNavigate } from "react-router-dom";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createChatBotMessage: any;
  setState: Dispatch<SetStateAction<unknown>>;
  children: JSX.Element;
}) => {
  const navigate = useNavigate();
  const handleGotIt = () => {
    const userMessage = createClientMessage("Got it!", {});

    const botMessage = createChatBotMessage("Pick a slot !!", {
      widget: "pickslot",
    });

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };

  const handlePickSlot = () => {
    const userMessage = createClientMessage("Got it!", {});

    const botMessage = createChatBotMessage("Enter your Name");

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage("Enter your age", {
      widget: "selectAge",
    });

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLast = () => {
    const userMessage = createClientMessage("27", {});

    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        withAvatar: false,
      }
    );
    // const customMessage = createClientMessage(
    //   "Thank you. In 5 seconds, bot will exit",
    //   { widget: "customMessage" }
    // );

    setState((prev: { messages: string }) => ({
      ...prev,
      messages: [...prev.messages, userMessage, botMessage],
    }));

    setTimeout(() => {
      navigate("/thank-you");
    }, 5000);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleGotIt, handlePickSlot, handleAge, handleLast },
        });
      })}
    </>
  );
};

export default ActionProvider;
