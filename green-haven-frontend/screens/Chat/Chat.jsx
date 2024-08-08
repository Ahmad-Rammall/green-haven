import React, { useState } from "react";
import {
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
  InputButtons,
} from "stream-chat-expo";
import { useRoute } from "@react-navigation/native";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";
import { useSelector } from "react-redux";
import { Text } from "react-native";

const Chat = () => {
  const [channel, setChannel] = useState();
  const route = useRoute();
  const channelId = route.params?.channelId;
  const client = StreamChat.getInstance(process.env.STREAM_KEY);
  const currentUser = useSelector((state) => state.User);
  const privatChannels = {
    type: "messaging",
    members: { $in: [currentUser._id.toString()] },
  };
  const publicChannels = { type: "livestream" };

  if (channelId) {
    const channel = client.channel("messaging", channelId);
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput InputButtons="" />
      </Channel>
    );
  }

  if (channel) {
    return (
      <Channel channel={channel}>
        <MessageList />
        <MessageInput InputButtons="" />
      </Channel>
    );
  }

  return (
    <ChannelList
      filters={{ $or: [privatChannels, publicChannels] }}
      onSelect={(channel) => setChannel(channel)}
    />
  );
};

export default Chat;
