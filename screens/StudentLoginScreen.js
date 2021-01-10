import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class StudentLoginScreen extends React.Component{
  constructor(){
    super();
    this.state={
      studentEmailId: '',
      studentPassword: ''
    }
  }  
  render(){
      return(
        <View style={styles.container}>
          <Text style={styles.title}>Student Login-Screen</Text>
          <Image
           source={require('../assets/animation-500-kjrfed8j-unscreen.gif')}
           style={{width: 300,height: 250,marginLeft: 120}}
          />
          <TextInput
            style={styles.loginBox}
            placeholder={"abc@studentEmail.com"}            
            onChangeText={(text)=>{
             this.setState({
              studentEmailId: text 
             })
            
            }}        
            value={this.state.studentEmailId}
          />
          <TextInput
            style={styles.loginBox}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                studentPassword: text
              })
            }}
            value={this.state.studentPassword}
          />  
             <TouchableOpacity style={[styles.button,{marginLeft: 150,marginTop: 30}]}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>  
      )  
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:  '#00FFFF',
    
  },
  title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, 

  loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, marginLeft: 130,borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
  button:{ width:250, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, padding: 10 }, 
  buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 }
})