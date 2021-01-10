import React,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
 
export default class MainScreen extends Component{
    constructor(props){
      super(props)  
    }   
    StudentLogin=()=>{
     this.props.navigation.navigate('StudentLoginScreen')  
    }

    TeacherLogin=()=>{
      this.props.navigation.navigate('TeacherLoginScreen')  
    }
    
    AdministratorLogin=()=>{
       this.props.navigation.navigate('AdministratorScreen')  
    }

    render(){
     return(
       <View style={styles.container}>
           <Header
             centerComponent={{text: 'Home-Work App' ,style:{fontWeight:'bold',fontSize: 20}}}    style={{color: '#90A5A9' }}
             backgroundColor="green"           
             />
             <Image
               source={require('../assets/animation-500-kjr7m4nt-unscreen.gif')}
               style={{width: 300,height: 250,marginTop: 20}}
             />
       <TouchableOpacity style={styles.button}
        onPress={()=>{this.AdministratorLogin()}}
       >
           <Text style={styles.buttonText}>Login As An Administrator</Text>
           </TouchableOpacity> 
       <TouchableOpacity style={[styles.button,{marginTop: 20}]} 
        onPress={()=>{this.StudentLogin()}}
       >
       <Text style={styles.buttonText}>Login As A Student</Text>    
       </TouchableOpacity> 
       <TouchableOpacity style={[styles.button,{marginTop:20}]}
        onPress={()=>{this.TeacherLogin()}}
       >
       <Text style={styles.buttonText}>Login As A Teacher</Text>    
       </TouchableOpacity> 
       </View>  
     )   
    }
}

const styles = StyleSheet.create({
  container:{
     flex: 1 ,
     backgroundColor: '#00FFFF',
  },  
  loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
  button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, padding: 10 }, 
  buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 }
})