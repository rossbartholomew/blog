import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "./src/context/BlogContext";
import IndexScreen from "./src/screens/indexScreen"
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator()

export default App = ()=> {
  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen name="Blogs" component={IndexScreen}/>
          <Stack.Screen name="Blog Details" component={ShowScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}