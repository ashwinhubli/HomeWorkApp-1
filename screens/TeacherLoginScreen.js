import React from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class TeacherLoginScreen extends React.Component{
    constructor(){
      super()
      this.state={
       teacherEmailId : '',
       teacherPassword : ''
      }
    }
    render(){
      return(
        <View style={styles.container}>
          <Text style={styles.title}>Teacher Login-Screen</Text>
          <Image
           source={require('../assets/animation-500-kjret36m-unscreen.gif')}
           style={{width: 300,height: 250,marginLeft: 120}}
          />
          <TextInput
           style={styles.loginBox}
           placeholder={"abc@teacherEmail.com"}
           onChangeText={(text)=>{
             this.setState({
              teacherEmailId: text
             }) 
           }}
           value={this.state.teacherEmailId}
          />
          <TextInput
            style={styles.loginBox}
            placeholder={"Enter Password"}
            onChangeText={(text)=>{
              this.setState({
               teacherPassword: text 
              })
            }}
            value={this.state.teacherPassword}
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