import React, { useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { getGeneratedMessage } from "../../core/dataSource/remoteDataSource/chatBot";

const ChatBot = ({ messages, setMessages }) => {
  const onSend = useCallback(async (messages) => {
    // get user's message
    const userMessage = messages[0].text;

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    // send to openAI and get response message
    const response = await getGeneratedMessage(userMessage);

    // save bot message
    const botMessage = {
      _id: new Date().getTime(),
      text: `${response.data.choices[0].message.content}`,
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
