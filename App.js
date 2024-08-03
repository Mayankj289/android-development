import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './component/About'
import Calendar from './component/Calendar';
import NoteApp from './component/Notes';
import Calculator from './component/Calculator';
import Bulb from './component/Bulb';
import { AppRegistry } from 'react-native';

const ImageButton = ({ onPress, imageSource, title }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={imageSource} style={{ width: 100, height: 100, alignItems: 'center' }} />
    <Text style={styles.buttonText}
    >{title}</Text>
  </TouchableOpacity>
);

const ImageButton1 = ({ onPress, imageSource, title }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={imageSource} style={{ width: 100, height: 100, alignItems: 'center' }} />
    <Text style={styles.buttonText}
    >{title}</Text>
  </TouchableOpacity>
);

const ImageButton2 = ({ onPress, imageSource, title }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={imageSource} style={{ width: 100, height: 100, alignItems: 'center' }} />
    <Text style={styles.buttonText}
    >{title}</Text>
  </TouchableOpacity>
);

const ImageButton3 = ({ onPress, imageSource, title }) => (
  <TouchableOpacity onPress={onPress} >
    <Image source={imageSource} style={{ width: 100, height: 100, alignItems: 'center' }} />
    <Text style={styles.buttonText}
    >{title}</Text>
  </TouchableOpacity>
);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.screenTitle}>Home Screen</Text>
      <ImageButton 
        imageSource={{ uri: 'https://play-lh.googleusercontent.com/vzOs3KWfj5tZLbJBk-wWDb57VGr_pNo9110Jd3QJ5sbN78l7RFXLpg41imR2OffyNA0O=w240-h480-rw' }}
        title="Calculator"
        onPress={() => navigation.navigate('Calculator')}>
        <Text style={styles.buttonText}>Go to Calculator</Text>
      </ImageButton>
      <ImageButton1
        imageSource={{ uri: 'https://as1.ftcdn.net/jpg/00/47/95/08/220_F_47950813_s5HB5irft6FvwoYcsO0iMIXT0ib9dzzL.jpg' }}
        title="Calendar"
        onPress={() => navigation.navigate('Calendar')}>
        <Text style={styles.buttonText}>Go to Calender</Text>
      </ImageButton1>
      <ImageButton2
        imageSource={{ uri: 'https://cdn.vectorstock.com/i/1000x1000/13/36/flashlight-isolated-on-transparent-background-vector-15491336.webp' }}
        title="Flash light"
        onPress={() => navigation.navigate('Bulb')}>
        <Text style={styles.buttonText}>Go to Flash</Text>
      </ImageButton2>
      <ImageButton3
        imageSource={{ uri: 'https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png' }}
        title="Notes"
        onPress={() => navigation.navigate('NoteApp')}>
        <Text style={styles.buttonText}>Go to Notes</Text>
      </ImageButton3>

    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View >
     
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <About/>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
    <Stack.Screen
      name="Calculator"
      component={Calculator}
      options={({ navigation }) => ({
        title: 'Calculator',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{'< Back'}</Text>
          </TouchableOpacity>
        ),
      })}
    />
   
    <Stack.Screen
      name="Calendar"
      component={Calendar}
      options={({ navigation }) => ({
        title: 'Calendar',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{'< Back'}</Text>
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="Bulb"
      component={Bulb}
      options={({ navigation }) => ({
        title: 'Flash',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{'< Back'}</Text>
          </TouchableOpacity>
        ),
      })}
    />
     <Stack.Screen
      name="NoteApp"
      component={NoteApp}
      options={({ navigation }) => ({
        title: 'Notes',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>{'< Back'}</Text>
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor:'black'
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20
  },
  backButton: {
    marginLeft: 10,
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
});


AppRegistry.registerComponent('MyApp',()=>App);
export default App;

