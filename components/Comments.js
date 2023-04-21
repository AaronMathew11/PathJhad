import { View, Text, Image } from "react-native";
import React, { useState } from "react";

const Comments = (props) => {
  return (
    <View>
      {props.comments.name == "Aaron" && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 20,
            marginLeft: 50,
          }}
        >
          <Image
            source={{ uri: props.comments.image }}
            style={{ height: 40, width: 40, marginRight: 15, borderRadius: 20 }}
          />
          <Text style={{ flex: 1, flexWrap: "wrap" }}>
            <Text>{props.comments.name}</Text>
            {props.comments.comment}
          </Text>
        </View>
      )}
      {!(props.comments.name == "Aaron") && (
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
        >
          <Image
            source={{ uri: props.comments.image }}
            style={{ height: 40, width: 40, marginRight: 15, borderRadius: 20 }}
          />
          <Text style={{ flex: 1, flexWrap: "wrap" }}>
            <Text>{props.comments.name}</Text>
            {props.comments.comment}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Comments;
