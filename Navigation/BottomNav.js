import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons';
import Home from '../screens/Home';
import MyGarden from '../screens/MyGarden';
import Scan from '../screens/Scan';
import Account from '../screens/Account';

const Tab= createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator initialRouteName='Chats' >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,tabBarIcon:({color,size})=>(<Ionicons name="home-outline" size={size} color={color} />)}}/>
      <Tab.Screen name="My Garden" component={MyGarden} options={{tabBarIcon:({color,size})=>(<Ionicons name="leaf-outline" size={size} color={color} />),}}/>
      <Tab.Screen name="My Scans" component={Scan} options={{tabBarIcon:({color,size})=>(<Ionicons name="scan-outline" size={size} color={color} />),}}/>
      <Tab.Screen name="Account" component={Account} options={{headerShown:false,tabBarIcon:({color,size})=>(<Ionicons name="person-outline" size={size} color={color} />),}}/>
    </Tab.Navigator>
  )
}

export default BottomNav