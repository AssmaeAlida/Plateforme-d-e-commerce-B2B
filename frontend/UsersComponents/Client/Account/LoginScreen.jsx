import { Button, Dimensions, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height


const LoginScreen = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    

    const sign =async()=>{
        try {
            const response = await axios.post('Lien dyl api dylk', {
              email: email,
              password: password,
            });

            console.log(response);
      
            // Hna radiri chno briti iw93 mni user ikon dar login
            
            setEmail('');
            setPassword('');
          } catch (error) {
            console.error('Login failed:', error);
            Alert.alert('Login Failed', 'Please check your credentials and try again.');
          }
    }


  return (
    <View style={styles.container}>
        <View style={styles.navigation}>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")} style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View style={styles.leftSide}></View>
        <ScrollView>
        <View style={styles.logo}>
            <Text style={styles.logoText}>Login</Text>
        </View>
        <View style={styles.loginContainer}>
        <View style={styles.login}>
            
            <Text style={styles.miniTitle}>Please Enter Your Information!</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Adress</Text>
                <View style={styles.inputBox}>
                <Ionicons style={styles.icon} name="mail" size={22} color="gray" />
                <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={(e)=> setEmail(e)} style={styles.input} placeholder='Type your email here...'/>
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputBox}>
                <FontAwesome style={[styles.icon,{paddingLeft:17}]} name="lock" size={23} color="gray" />
                <TextInput onChangeText={(e)=> setPassword(e)} secureTextEntry={true} style={[styles.input,{paddingLeft:12}]} placeholder='Type your password here...'/>
                </View>

                <View style={styles.InputFooter}>
                <View style={styles.checkboxContainer}>
                <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#FF5733' : undefined}
                />
                <Text style={styles.checkboxText}>Remember Me</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate("Forgot")}>
                <Text style={styles.forgotTitle}>Forgot Password</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={sign} style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.other}>
                    <View style={styles.line}></View> 
                    <Text style={styles.or}>Or</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.socialMedia}>
                    <TouchableOpacity style={styles.media}>
                    <AntDesign name="google" size={16} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.media}>
                    <Entypo name="facebook-with-circle" size={16} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.media}>
                    <Ionicons name="logo-tiktok" size={16} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.socialMedia2}>
                    <Text style={styles.alradyText}>Don't have an account?</Text>
                    <TouchableOpacity style={{marginLeft:5}} onPress={() => navigation.navigate('Register')}><Text style={[styles.click]}>Click here</Text></TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
        </ScrollView>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width:WIDTH,
        height:HEIGHT,
        
      },
      loginContainer:{
        width:WIDTH,
        alignItems:'center',
        paddingTop:"25%"
      },
      login:{
        backgroundColor: '#fff',
        width:"80%",
        justifyContent: 'center',
      },
      input:{
        width:"90%",
        borderWidth:1,
        borderColor:"#D1D1D1",
        borderRadius:100,
        height:40,
        paddingLeft:8,
        marginBottom:15,
        fontSize:11,
        borderLeftWidth:0,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,

      },
      title:{
        fontWeight:"800",
        fontSize:30
      },
      miniTitle:{
        fontWeight:"400",
        fontSize:9,
        marginTop:5,
        color:"#616161",
      },
      inputContainer:{
        marginTop:40
      },
      inputBox:{
        flexDirection:"row",
      },
      label:{
        fontSize:10,
        marginBottom:5,
        color:"#616161",

      },
      InputFooter:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
      },
      checkboxContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:-8
      },
      checkbox: {
        margin: 8,
      },
      checkboxText:{
        fontSize:10,
        color:"#616161"
      },
      forgotTitle:{
        color:"#FF5733",
        fontSize:11,
        textDecorationLine:"underline",
      },
      button:{
        width:"100%",
        backgroundColor:"#FF5733",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        height:35,
        marginTop:20
      },
      buttonText:{
        color:"white",
        fontWeight:"700",
        fontSize:12,
      },
      other:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:25
      },
      line:{
        width:"42%", 
        height:1,
        backgroundColor:"#A5A5A5"
      },
      or:{
        color:"#A5A5A5",
        fontSize:12
      },
      icon:{
        height:40,
        paddingTop:8,
        borderRadius:100,
        borderWidth:1,
        borderColor:"#D1D1D1",
        borderRightWidth:0,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        paddingLeft:10,

      },
      socialMedia:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:20
      },
      socialMedia2:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
      },
      media:{
        borderWidth:1,
        borderColor:"#A5A5A5",
        borderRadius:20,
        width:60,
        height:32,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      },
      navigation:{
        width:"100%"
      },
      arrow:{
        width:35,
        height:35,
        borderRadius:100,
        backgroundColor: "#FF5733",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        marginTop:10
      },
      leftSide:{
        backgroundColor: "#FF5733",
        width:8,
        height:"100%",
        position:"absolute",
        left:0
      },
      logo:{
        width:WIDTH,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:50,
        marginBottom:-30
      },
      logoText:{
        fontSize:30,
        fontWeight:"800",
        color:"#FF5733"
      },
      alradyText:{
        fontSize:11,
        color:"#616161",
      },
      click:{
        color:"#FF5733",
        fontSize:11,
        textDecorationLine:"underline",
      },
})