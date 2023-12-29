import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons"
import { SIZES, COLORS } from "../../assets/constants";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name="search" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          value=""
          placeholder="What are you looking for"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.searchBtn}>
        <Ionicons
          name="camera-outline"
          size={SIZES.small}
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
};

export default SearchBar;
