import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { usersDataSource } from "../../core/dataSource/remoteDataSource/users";
import { useEffect } from "react";
import { UserChat } from "../../components";
import { SIZES } from "../../assets/constants";


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
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserChat user={item} />}
      />
    </View>
  );
};

export default Conversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.medium,
  },
});
