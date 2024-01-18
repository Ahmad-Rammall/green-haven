import React, { useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatBot = ({ messages, setMessages }) => {
  const onSend = useCallback((messages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const botMessage = {
      _id: new Date().getTime(),
      text: "xxx",
      user: {
        _id: 1,
        name: "ChatBot",
      },
    };

    setTimeout(() => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, botMessage)
      );
    }, 1000);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 2,
        createdAt: new Date(),
      }}
    />
  );
};

export default ChatBot;
