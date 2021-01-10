import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import StudentLoginScreen from './screens/StudentLoginScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import AdministratorScreen from './screens/AdministratorScreen';

export default class App extends React.Component {
  render(){
  return (
   <SafeAreaProvider>
    <View style={styles.container}>
      <AppContainer/>
    </View>
    </SafeAreaProvider>

  );
  }
}

const SwitchNavigator = createSwitchNavigator({
  MainScreen : {screen :MainScreen},
  StudentLoginScreen :{screen : StudentLoginScreen},
  TeacherLoginScreen :{screen : TeacherLoginScreen},
  AdministratorScreen:{screen : AdministratorScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
