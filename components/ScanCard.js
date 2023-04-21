import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";



const ScanCard = (props) => {

  const navigation=useNavigation();


  return (
    <Pressable onPress={()=>{navigation.navigate('ScanInfo')}} style={{ display: "flex", flexDirection: "row", padding:10, backgroundColor:"white",marginHorizontal:20,marginVertical:3, borderColor:"lightgray", borderWidth:0.6, borderRadius:8 }}>
      <Image
        source={{
          uri: "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
        }}
        style={{ height: 70, width: 70, borderRadius: 40 }}
      />
      <View
        style={{
          flexDirection: "column",
          display: "flex",
          flex: 1,
          marginLeft:30
        //   backgroundColor: "red",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width:"100%",
            justifyContent: "space-between",
            // backgroundColor:"red"
          }}
        >
          <Text style={{fontWeight:"bold", fontSize:16}}>{props.Data2.title}</Text>
          <Text style={{color:"gray", fontSize:12}}>{props.Data2.date}</Text>
        </View>
        <Text style={{marginTop:10,color:"gray"}}>{props.Data2.desc}</Text>
      </View>
    </Pressable>
  );
};

export default ScanCard;
