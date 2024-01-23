import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import {
  Post,
  SearchBar,
  Story,
  PostCreator,
  Comment,
  LoadingModal,
} from "../../components";
import styles from "./feed.styles";
import React, { useEffect, useState, useRef } from "react";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import { usersDataSource } from "../../core/dataSource/remoteDataSource/users";
import { PUBLIC_FOLDER } from "@env";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import { useSelector } from "react-redux";

const Feed = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const bottomSheetModalRef = useRef(null);
  const [modalStyle, setModalStyle] = useState(styles.modalClose);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const snapPoints = ["80%"];
  const [commentsObject, setCommentsObject] = useState({
    postId: "",
    postComments: [],
  });

  const currentUser = useSelector((state) => state.User);

  const handleOpenModal = () => {
    bottomSheetModalRef.current?.present();
    setModalOpen(true);
    setModalStyle(styles.modalOpen);
  };

  useEffect(() => {
    console.log(modalStyle)
  }, [modalStyle])

  const getPosts = async () => {
    setLoading(true);
    const response = await postDataSource.getPosts();
    if (response?.status === 200 || response?.status === 304) {
      setPosts(response.data);
      setLoading(false);
    }
  };

  const getAllUsers = async () => {
    const response = await usersDataSource.getAllUsers();
    if (response?.status === 200) {
      setUsers(response.data);
    }
  };

  const addComment = async () => {
    const response = await postDataSource.addComment({
      text: commentInput,
      postId: commentsObject.postId,
    });
    if (response?.status === 200) {
      const newComment = {
        text: commentInput,
        likes: [],
        user: {
          profile_picture: currentUser.profilePicture,
          name: currentUser.username,
        },
      };
      setCommentInput("");
      setCommentsObject((prevCommentsObject) => ({
        ...prevCommentsObject,
        postComments: [...prevCommentsObject.postComments, newComment],
      }));
      refreshPage();
    }
  };

  const refreshPage = async () => {
    setRefresh(true);
    setLoading(true);
    setSearchInput("");
    try {
      await getPosts();
      await getAllUsers();
    } finally {
      setRefresh(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
    getAllUsers();
  }, []);

  useEffect(() => {
    setSearchedUsers([]);
    setSearchedUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  const navigateToUserProfile = (user) => {
    if(currentUser._id.toString() === user._id.toString()){
      navigation.navigate("ProfilePage");
    }
    else{
      navigation.navigate("User Profile", {
        user,
        profilePicture: PUBLIC_FOLDER + "profile-pics/" + user.profile_picture,
        refreshPage,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={refreshPage} />
        }
      >
        <View style={styles.postsWrapper}>
          <SearchBar
            placeholder={"Search For Users"}
            setSearchInput={setSearchInput}
          />

          {/* Search Result */}
          {searchInput !== "" && (
            <ScrollView
              style={styles.searchResult}
              showsVerticalScrollIndicator={false}
            >
              {searchedUsers.map((user) => (
                <TouchableOpacity
                  style={styles.userSearchResult}
                  key={user._id}
                  onPress={() => navigateToUserProfile(user)}
                >
                  <Image
                    source={{
                      uri:
                        PUBLIC_FOLDER + "profile-pics/" + user.profile_picture,
                    }}
                    style={styles.userSearchImg}
                  />
                  <Text style={styles.userSearchName}>{user.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <PostCreator refresh={refreshPage} />

          {loading ? (
            <LoadingModal />
          ) : posts ? (
            posts.map((post) => (
              <Post
                key={post._id}
                post={post}
                refreshPage={refreshPage}
                handleOpenModal={handleOpenModal}
                setCommentsObject={setCommentsObject}
              />
            ))
          ) : (
            <View style={styles.noPosts}>
              <Text style={styles.noPostsText}>No Posts</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={modalStyle}>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onDismiss={() => {
              setModalOpen(false);
              // setModalStyle(styles.modalClose);
            }}
            handleComponent={null}
          >
            <TouchableOpacity
              onPress={() => bottomSheetModalRef.current.close()}
              style={styles.modalHeader}
            >
              <MaterialIcons name="highlight-remove" size={25} />
            </TouchableOpacity>
            <BottomSheetScrollView
              contentContainerStyle={{ paddingBottom: 60 }}
            >
              {commentsObject.postComments.map((comment) => (
                <Comment
                  key={comment._id}
                  comment={comment}
                  postId={commentsObject.postId}
                  refreshPage={refreshPage}
                />
              ))}
            </BottomSheetScrollView>
            <View style={styles.commentInput}>
              <TextInput
                placeholder="Add Comment"
                onChangeText={setCommentInput}
                value={commentInput}
              />
              <TouchableOpacity onPress={() => addComment()}>
                <MaterialIcons name="send" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    </SafeAreaView>
  );
};

export default Feed;
