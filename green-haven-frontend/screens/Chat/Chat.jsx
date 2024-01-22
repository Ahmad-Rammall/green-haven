import React, { useState } from "react";
import {
  ChannelList,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";
import { useRoute } from "@react-navigation/native";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";
import { useSelector } from "react-redux";

const Chat = () => {
  const [channel, setChannel] = useState();
  const route = useRoute();
  const channelId = route.params?.channelId;
  const client = StreamChat.getInstance(STREAM_KEY);
  const currentUser = useSelector((state) => state.User);
  const privatChannels = {type: 'messaging', members: { $in: [currentUser._id.toString()] } }
  const publicChannels = {type: 'livestream'}

  if (channelId) {
    const channel = client.channel("messaging", channelId);
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

  return (
    <ChannelList
      filters={{ $or: [privatChannels, publicChannels] }}
      onSelect={(channel) => setChannel(channel)}
    />
  );
};

export default Chat;
