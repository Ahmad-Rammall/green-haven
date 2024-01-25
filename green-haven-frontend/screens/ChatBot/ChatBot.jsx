import React, { useCallback, useState } from "react";
import { GiftedChat, Send, Bubble } from "react-native-gifted-chat";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import { postMessage } from "../../core/dataSource/remoteDataSource/geminiAI";

const ChatBot = ({ messages, setMessages }) => {
  const [isTyping, setIsTyping] = useState(false);

  const onSend = useCallback(async (messages) => {
    setIsTyping(true);
    // get user's message
    const userMessage = messages[0].text;

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    // send to openAI and get response message
    const response = await postMessage(userMessage);

    // save bot message
    const botMessage = {
      _id: new Date().getTime(),
      text: `${response}`,
      user: {
        _id: 1,
        name: "ChatBot",
      },
    };

    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, botMessage)
    );
    setIsTyping(false);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{ justifyContent: "center", height: "100%", marginRight: 10 }}
        >
          <MaterialIcons name="send" size={24} color={COLORS.primary} />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.primary,
          },
        }}
        textStyle={{
          right: {
            color: COLORS.offwhite,
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 2,
        createdAt: new Date(),
      }}
      renderSend={renderSend}
      isTyping={isTyping}
      renderBubble={renderBubble}
    />
  );
};

export default ChatBot;
