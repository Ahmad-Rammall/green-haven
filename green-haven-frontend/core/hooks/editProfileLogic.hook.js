import { loggedInUser } from "../dataSource/localDataSource/user";
import { profileDataSource } from "../dataSource/remoteDataSource/profile";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-simple-toast";

export const useProfileLogic = () => {
  const [error, setError] = useState("");
  const currentUser = useSelector((state) => state.User);

  const [credentials, setCredentials] = useState({
    email: currentUser.email,
    name: currentUser.username,
    phone: currentUser.phoneNumber,
    location: currentUser.location,
    bio: currentUser.bio,
    profilePic: {},
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFormChange = (key, value) => {
    setCredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (passwords) => {
    try {
      if (passwords) {
        const response = await profileDataSource.updatePassword(passwords);
        if (response?.status === 200) {
          Toast.show("Password Updated Successfully.", Toast.LONG);
          navigation.navigate("Profile");
        }
        else{
          Toast.show("Passwords Don't Match !", Toast.LONG);
        }
        return
      }

      const data = new FormData();

      const { name, phone, location, bio, profilePic } = credentials;

      // Append each piece of information to the form data
      data.append("name", name);
      data.append("phone_number", phone);
      data.append("location", location);
      data.append("bio", bio);
      if (profilePic.uri) {
        data.append("file", {
          uri: profilePic.uri,
          type: "image/jpeg",
          name: "user.jpg",
        });
      }
      const response = await profileDataSource.updateProfile(data);

      const updatedUser = response.data.updatedUser;

      dispatch(
        loggedInUser({
          email: updatedUser.email,
          username: updatedUser.name,
          bio: updatedUser.bio,
          phoneNumber: updatedUser.phone_number,
          location: updatedUser.location,
          role: updatedUser.role,
          garden: updatedUser.garden,
          cart: updatedUser.cart,
          following: updatedUser.following,
          followers: updatedUser.followers,
          profilePicture: updatedUser.profile_picture,
        })
      );
      Toast.show("Profile Updated Successfully.", Toast.LONG);
      navigation.navigate("Profile");
    } catch (error) {
      Toast.show(error?.message, Toast.LONG);
      setError(error?.message);
    }
  };

  return { error, handleSubmit, handleFormChange, credentials };
};
