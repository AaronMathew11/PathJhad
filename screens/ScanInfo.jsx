import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const ScanInfo = () => {
  return (
    <View>
      <ImageBackground  source={require('../assets/scanBackground.png')} style={{height:400, position:'relative'}}>
        <View style={{position:'absolute', bottom:80, left:30}}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>Scan Title</Text>
        <Text style={{color:'white'}}>Date</Text>
        </View>

      </ImageBackground>

      <View style={{marginHorizontal:30, }}>      
      <Text style={{lineHeight:20}}>
      Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden.
</Text>

<Text style={{marginTop:20, lineHeight:20}}>
Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden. Beauty blooms in the heart as well as garden.

      </Text>

      </View>
    </View>
  )
}

export default ScanInfo