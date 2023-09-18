import React from "react";
import { useAppDispatch } from "../app/hooks";
import { setName } from "../app/userSlice";

const MessageParser = ({
  children,
  actions,
}: {
  children: JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actions: any;
}) => {
  const dispatch = useAppDispatch();
  const parse = (message: string) => {
    if (message.length > 1) {
      dispatch(setName(message));
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
