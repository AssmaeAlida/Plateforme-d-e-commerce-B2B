import { Button, Dimensions, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height


const Forgot = ({navigation}) => {
    const [email,setEmail] = useState(null);

    const resend =async()=>{
                try {
                    const response = await axios.post('Lien dyl api dylk', {
                      email: email,
                    });
              
                    // Hna radiri chno briti iw93 mni user isift demande dyl password modification
              
                    setEmail('');
                    setPassword('');
                  } catch (error) {
                    console.error('Request failed:', error);
                  }
    }

  return (
    <View style={styles.container}>
        <View style={styles.navigation}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.arrow}>
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View style={styles.leftSide}></View>
        <View style={styles.loginContainer}>
        <View style={styles.login}>
            <Text style={styles.title}>Please provide your email</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email Adress</Text>
                <TextInput autoCapitalize="none" keyboardType="email-address" onChangeText={(e)=> setEmail(e)} style={styles.input} placeholder='Type your email here...'/>

                <TouchableOpacity onPress={resend} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PasswordModification')}>
        <Text style={styles.linkText}>Go to Password Modification</Text>
    </TouchableOpacity> 

    
    <TouchableOpacity onPress={() => navigation.navigate('InsertCode')}>
        <Text style={styles.linkInsert}>Go to Insert Code</Text>
    </TouchableOpacity>
                

            </View>
        </View>
        </View>
    </View>
  )
}

export default Forgot

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
        width:"100%",
        borderWidth:1,
        borderColor:"#D1D1D1",
        borderRadius:5,
        height:38,
        paddingLeft:8,
        marginBottom:10,
        fontSize:11,

      },
      title:{
        fontWeight:"800",
        fontSize:24,
        color:"#FF5733",

      },
      inputContainer:{
        marginTop:30
      },
      label:{
        fontSize:10,
        marginBottom:5,
        color:"#616161",

      },
      
      button:{
        width:"100%",
        backgroundColor:"#FF5733",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        height:35,
        marginTop:10
      },
      buttonText:{
        color:"white",
        fontWeight:"700",
        fontSize:12,
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
      linkText: {
        color: '#FF5733',
        marginTop: 10,
        textAlign: 'center',
    },

    linkInsert: {
        color: '#FF5733',
        marginTop: 10,
        textAlign: 'center',
    },
})