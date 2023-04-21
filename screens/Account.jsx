import { View, Text, Image, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FlatList} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from 'react'



const Account = () => {

  const navigation=useNavigation();

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return {
        id: i,
        src: 'https://unsplash.it/400/400?image=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  return (
    <View>
      <ImageBackground source={require('../assets/profileBackground.png')} style={{height:170, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../assets/profile.png')}   style={{height:80, width:80}}/>
        <View style={{marginLeft:20}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>Orlando Diggs</Text>
          <Text style={{color:'white'}}>Surgeon</Text>
        </View>
      </ImageBackground>
      <View style={{display:'flex',flexDirection:'row', marginHorizontal:50,marginVertical:20, justifyContent:'space-between', paddingBottom:10}}>
        <View style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontSize:30}}>5</Text>
          <Text style={{color:'gray'}}>Posts</Text>
        </View>
        <View style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontSize:30}}>16</Text>
          <Text style={{color:'gray'}}>Followers</Text>
        </View>
        <View style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          <Text style={{fontSize:30}}>28</Text>
          <Text style={{color:'gray'}}>Following</Text>
        </View>
      </View>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <Pressable onPress={()=>{
            navigation.navigate('SinglePost')
          }}
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1,
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </Pressable>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      /></View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
});

export default Account