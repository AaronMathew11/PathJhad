import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Post = (props) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ImageBackground
        source={require("../assets/postImage.png")}
        resizeMode='cover'
        style={{ height: 500 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            marginLeft: 10,
          }}
        >
          <Image source={require("../assets/profile.png")} style={{height:30, width:30}}></Image>
          <Text style={{ marginLeft: 10, color: "white" }}>
            {props.Data.user}
          </Text>
        </View>
      </ImageBackground>
      <View style={{ display: "flex", padding: 15, flexDirection:'row', justifyContent:'space-between' }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          {/* <FavoriteBorderIcon/> */}
          <MaterialIcons name='favorite-border' size={25} color='black' />
          {/* <ChatBubbleOutlineIcon/> */}
          <MaterialIcons
            name='chat-bubble-outline'
            size={25}
            color='black'
            style={{ marginLeft: 20 }}
          />
        </View>
        {/* <BookmarkBorderIcon/> */}
        <MaterialIcons
          name='bookmark-outline'
          size={25}
          color='black'
          style={{ marginLeft: 20 }}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginVertical:10, paddingBottom:30 }}>
        <Text>
          <Text style={{ fontWeight: "bold" }}>{props.Data.user} </Text>
          {props.Data.caption}
        </Text>
      </View>
    </View>
  );
};

export default Post;
