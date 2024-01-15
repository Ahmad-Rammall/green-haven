import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { usersDataSource } from "../../core/dataSource/remoteDataSource/users";
import { useEffect } from "react";
import { UserChat } from "../../components";

const Conversation = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await usersDataSource.getAllUsers();
    if (response?.status === 200) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <FlatList 
      data={users}
      renderItem={({ item }) => <UserChat user={item}/>}
    />
  );
};

export default Conversation;

const styles = StyleSheet.create({});
