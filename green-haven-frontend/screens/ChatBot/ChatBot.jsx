import React, { useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { geminiDataSource } from "../../core/dataSource/remoteDataSource/geminiAI";

const ChatBot = ({ messages, setMessages }) => {
  const onSend = useCallback(async (messages) => {
    // get user's message
    const userMessage = messages[0].text;

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    // send to openAI and get response message
    const response = await geminiDataSource.getResponse({message: userMessage});
    
    // save bot message
    const botMessage = {
      _id: new Date().getTime(),
      text: `${response.data.message}`,
      user: {
        _id: 1,
        name: "ChatBot",
      },
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, botMessage)
    );
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
