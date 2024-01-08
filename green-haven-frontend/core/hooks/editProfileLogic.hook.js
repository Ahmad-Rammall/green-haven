import { loggedInUser } from "../dataSource/localDataSource/user";
import { profileDataSource } from "../dataSource/remoteDataSource/profile";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export const useProfileLogic = () => {
  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    location: "",
    bio: "",
  });

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFormChange = (key, value) => {
    setCredentials((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await profileDataSource.updateProfile(credentials);

      console.log(response);

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

      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };

  return { error, handleSubmit, handleFormChange };
};
