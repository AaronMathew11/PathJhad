import { View, Text, Image } from 'react-native'
import React from 'react'
import Post from '../components/Post'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { FlatList } from 'react-native'



const Home = () => {

  Data=[
    {
      image : <Image source={require('../assets/postImage.png')} />,
      user: 'Aaron',
      caption: 'this is my caption',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      user: 'Paji',
      caption: 'this is my 2nd caption',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      user: 'Varun',
      caption: 'this is my third caption',
    },
  ]

  return (
    <View>
      <View style={{display:'flex', justifyContent:'space-between', flexDirection:'row',padding:20,marginTop:30}}>
        <Image source={require('../assets/PathJhad.png')} style={{height:20, width:95}}/>
        <MaterialIcons name='add' size={25} color='black' />
      </View>
          <FlatList
      data={Data}
      renderItem={({item})=><Post Data={item}/>}
      style={{marginBottom:90}}
    />
    </View>

  )
}

export default Home