import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessageParser = ({ children, actions }: { children: JSX.Element, actions: any }) => {
  const parse = (message: string) => {
    if (message.length > 1) {
      actions.handleAge();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </>
  );
};

export default MessageParser;
