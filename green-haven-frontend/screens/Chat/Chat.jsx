import React, { useState } from "react";
import {
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import {useRoute} from "@react-navigation/native";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";

const Chat = () => {
  const [channel, setChannel] = useState();
  const route = useRoute();
  const channelId = route.params?.channelId;
  const client = StreamChat.getInstance(STREAM_KEY);

  if(channelId){
    const channel = client.channel('messaging', channelId);
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput />
      </Channel>
    );
  }

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
