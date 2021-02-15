import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

 function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SURAU SAUJANA IMPIAN</Text>
      <Image
          source={
            require('../assets/ssiLogo.jpg')
          }
          style={styles.image}
        />
      <View style={styles.buttonView}>
        <Button
          onPress={() => 
            navigation.navigate('Register')
          }
          title="PENDAFTARAN SOLAT JUMAAT"
          style={styles.button}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8fcef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top:-70,
    color:'#19853e'
  },
  image: { 
    width: 250, 
    height: 250,
    top:-20
  },
  buttonView: {
    top: 20
  },
  button: {
    backgroundColor: "#F194FF"
  }
});

export default WelcomeScreen;
