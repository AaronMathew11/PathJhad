import { View, Text, Button, FlatList,Image, Alert } from 'react-native'
import React, { useState, useCameraDevices } from 'react'
import ScanCard from '../components/ScanCard'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native'
import {Camera, requestCameraPermissionsAsync} from 'expo-camera'

export default function Scan() {

  let camera

  const [startCamera,setStartCamera] = useState(false)
  const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)


  async function cameraOn(){
    const {status} = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      // start the camera
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }


  Data2=[
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 1',
      desc: 'description 1',
      date : '1/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 2',
      desc: 'description 2',
      date : '5/10/23',
    },
    {
      image : <Image source={require('../assets/postImage.png')} />,
      title: 'Scan 3',
      desc: 'description 3',
      date : '16/10/23',
    },
  ]


  return (
    <View style={{backgroundColor:'white'}}>
    {
      startCamera ?(
        <Camera
        type={cameraType}
        style={{flex: 1,width:"100%"}}
        ref={(r) => {
         camera = r
        }}
      ></Camera>
      ) :(
        <View style={{height:'100%'}}>
        <FlatList
        data={Data2}
        renderItem={({item})=><ScanCard Data2={item}/>}
        style={{marginTop:20}}
        />
        <TouchableOpacity
        onPress={cameraOn}
        style={{backgroundColor:'white', borderRadius:30, width:60, height:60,elevation:3, display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', bottom:20, right:20, zIndex:2}}
        >
            <MaterialIcons
              name='camera-alt'
              size={35}
              color='#0066FF'
            />
          </TouchableOpacity>
      </View>   
   
  )}
  </View>
  )}
