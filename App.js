import{View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/indexScreen"
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

const Stack = createNativeStackNavigator()

export default App = ()=> {
 
  const CreateButton = () => {
    const navigation = useNavigation()
  
    return (
      <TouchableOpacity
        onPress={()=> navigation.navigate("Create")}
      >
        <Feather name='plus' size={28} color="blue" style={{marginRight:15}}/>
      </TouchableOpacity>
    )
  }
  
  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen 
          name="Blog List" 
          component={IndexScreen} 
          options={{
            headerTitle: 'Blog',
            headerRight: ()=> <CreateButton/>
          }} 
          />
          <Stack.Screen 
          name="Blog Details" 
          component={ShowScreen}  
          options={{headerTitle: 'Blog Details'}}
          />
          <Stack.Screen 
          name="Create" 
          component={CreateScreen} 
          options={{
            headerTitle: 'Create New Blog'
          }} 
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}