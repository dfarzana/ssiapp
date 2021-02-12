import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pendaftaran Solat Jumaat</Text>
      <Text style={styles.text1}>Nama :</Text>
      <TextInput style={styles.box}/>
      <Text style={styles.text1}>Nombor Telefon :</Text>
      <TextInput style={styles.box}/>
      <View  style={styles.fitToText}>
          <Button
            title="Hantar"
            onPress={() => navigation.navigate('Register')}
          />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8fcef',
    flex:1
  },
  text: {
    textAlign:'center',
    fontSize:20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top:150,
    color:'#141414'
  },
  text1: {
    paddingLeft:10,
    fontSize:20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top:250,
    color:'#141414'
  },
  box: {
    paddingLeft:10,
    marginHorizontal:10,
    marginVertical:5,
    fontSize:20,
    top:250,
    color:'#141414',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
  },
  fitToText: {
    marginHorizontal:10,
    top:350
  },
});

export default RegisterScreen;
