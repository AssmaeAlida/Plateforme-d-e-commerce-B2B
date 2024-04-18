import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './UsersComponents/Client/Account/LoginScreen';
import Register from './UsersComponents/Client/Account/Register';
import Forgot from './UsersComponents/Client/Account/Forgot';
import PasswordModification from './UsersComponents/Client/Account/PasswordModification';
import InsertCode from './UsersComponents/Client/Account/InsertCode';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="PasswordModification" component={PasswordModification} />
        <Stack.Screen name="InsertCode" component={InsertCode} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
