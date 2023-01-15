import React from 'react';
import {  View, Text, TextInput, TouchableOpacity, Button, SafeAreaView, StyleSheet} from 'react-native';

import AssetExample from './components/AssetExample';

export default function Login() {
  return (
    <SafeAreaView style={StyleSheet.container}>
    <View style={{ alignItems:'center', marginTop:50, marginBottom:10}}>
    
    <AssetExample />
      <Text style={{fontFamily:'Times-New-Roman', fontSize:27, marginBottom:30, marginTop:-15}}>
        Login 
      </Text>
      <View/>
      
      <View 
      style={{
        fontSize: 9,
        flexdirection:'row', 
        borderBottomColor:'#ccc', 
        borderBottomWidth:1.25, 
        paddingBottom:18, 
        marginBottom:42,
        width:300,
        height:30
        }}>
      <TextInput placeholder='Email'/>
      </View>
      
      <View 
      style={{
        flexdirection:'row', 
        borderBottomColor:'#ccc', 
        borderBottomWidth:1.25, 
        paddingBottom:18, 
        marginBottom:-25,
        marginRight: 5,
        width:300
        }}>
      <TextInput placeholder='New Password' 
      secureTextEntry={true}/>
      </View>


      <View>
      <TouchableOpacity onPress={() =>{}}>
      <Text style={{color:'AD40AF', fontweight:'700', marginBottom:25, marginTop:3, marginLeft: 240, color:'purple'}}>Forgot?</Text>
      </TouchableOpacity>
      </View>

      
      <View style={styles.container}>
        <Button
        title=" Update Password    "
        color = '#2e5b5e'
        fontweight=''
        fontSize='40'
        marginBottom='30'

        />
      </View>
      
    </View>
    </SafeAreaView>
   
    
  );


}
const styles = StyleSheet.create({
  container: {

      backgroundColor: '#90e9f0',
      alignItems: 'center',
      
  },
});
