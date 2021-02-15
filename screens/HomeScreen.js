import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import axios from "axios";
import { baseURL } from "../config.json";

function HomeScreen() {
  const [result, setResult] = useState('tidak dipilih untuk')
  const [nextDate, setNextDate] = useState('18 Feb 2021')

  useEffect(() => {
    const updateResult = async () => {
      try {
        const data = await getResult()
        setResult(data.result)
        setNextDate(data.nextDate)
      }
      catch(err) {
        console.log(err)
      }
    }
    updateResult()
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Anda {result} Solat Jumaat pada {nextDate}.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const getResult = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken')
    const response = await axios.get(`${baseURL}/api/result`, {
      headers: {
        token
      }
    })
    return response.data;
  }
  catch(err) {
    console.log(err)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8fcef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:23,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    // top:-70,
    color:'#05591f',
    textAlign:'center'
  }
});

export default HomeScreen;
