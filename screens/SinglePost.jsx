import { View, Text, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Comments from '../components/Comments'

const SinglePost = () => {

const comments =[
    {
        name:'Varun',
        image:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        comment:'Lorem ipsum dolor sit amet consectetur. Arcu habitant'
    },
    {
        name:'Aaron',
        image:'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
        comment:'Lorem ipsum dolor sit amet consectetur. Arcu habitant'
    },
    {
        name:'Varun',
        image:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        comment:'Lorem ipsum dolor sit amet consectetur. Arcu habitant'
    },
    {
        name:'Varun',
        image:'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        comment:'Lorem ipsum dolor sit amet consectetur. Arcu habitant'
    },
    {
        name:'Aaron',
        image:'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
        comment:'Lorem ipsum dolor sit amet consectetur. Arcu habitant'
    },
]

  return (
    <ScrollView>
       <ImageBackground source={require('../assets/profileBackground.png')} style={{height:170, display:'flex', flexDirection:'row',  alignItems:'center'}}>
        <View style={{marginLeft:40}}>
          <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>Orlando Diggs</Text>
          <Text style={{color:'white'}}>Surgeon</Text>
        </View>
      </ImageBackground>
      <Image source={require('../assets/postImage.png')} style={{width:'100%'}}/>
      <Text style={{margintop:30, padding:25,lineHeight:20}}><Text style={{fontWeight:'bold'}}>Name</Text> Lorem ipsum dolor sit amet consectetur. Arcu habitant nisl posuere mattis at erat aliquam. At nec vitae faucibus sit commodo </Text>
    <View style={{padding:20}}>
        <FlatList
        data={comments}
        renderItem={({item})=> <Comments comments={item}/>}
        />
    </View>
    </ScrollView>
  )
}

export default SinglePost