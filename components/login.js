import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native'
//import {colors, parameters} from "./components/styles"
import {Icon} from 'react-native-elements'
import * as Animated from "react-native-animatable"
import { TextInput } from 'react-native-gesture-handler';

import {Header} from '../components/header'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Login(){
  return(
    <View style ={styles.container}>
      <Header title = "My Account" type = "arrow-left" />

      <View style={{marginLeft:20, marginTop:10}}>
        <Text style={title}>LOGIN</Text>
      </View>

      <View style={{alignItems:"center", marginTop:10}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
      </View>

      <View style={{marginTop:20}}>
        <View>
          <TextInput
           style={styles.TextInput1}
           placeholder="Email"
          />
        </View>

        <View style={styles.TextInput2}>
          <Animated.view>
            <Icon
             name="lock"
             iconStyle={{color:Colors.grey3}}
             type="material"
            />
          </Animated.view>

            <TextInput
              style= {{width:"80%"}}
              placeholder="Password"
            />
            <Animated.view>
              <Icon
                name="visibility-off"
                iconStyle={{color:Colors.grey3}}
              />
            </Animated.view>

          
        </View>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  TextInput1:{
    borderWidth:1,
    borderColor:"#86939e",
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    paddingLeft:15
  },

  TextInput2:{
    borderWidth:1,
    borderRadius:12,
    marginHorizontal:20,
    borderColor:"#86939e",
    flexDirection:"row",
    justifyContent:"space-between",
    alignContent:"center",
    alignItems:"center",
    paddingLeft:15
  },
})