import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import UserChat from "../../components/UserChat/UserChat";
import styles from "./chat.styles";
import {
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { useEffect } from "react";

const Chat = () => {
  const [channel, setChannel] = useState();

  useEffect(() => {
    console.log(channel);
  }, [channel]);

  if (channel) {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    );
  }

  return <ChannelList onSelect={(channel) => setChannel(channel)} />;
};

export default Chat;
