import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons"
import { SIZES, COLORS } from "../../assets/constants";
import styles from "./searchBar.styles";
import React from "react";

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Feather name="search" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          value=""
          placeholder={placeholder}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.searchBtn}>
        <Ionicons
          name="camera-outline"
          size={20}
          color={COLORS.secondary}
        />
      </View>
    </View>
  );
};

export default SearchBar;
