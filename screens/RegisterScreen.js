import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Formik } from 'formik';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import * as yup from 'yup';
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { baseURL } from "../config.json";

const registerValidationSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, ({ max }) => `Nama paling panjang ${max} patah perkataan`)
      .required('Nama wajib diisi'),
    phoneno: yup
      .string()
      .max(11, ({ max }) => `Nombor telefon paling panjang ${max} nombor`)
      .required('Nombor telefon wajib diisi'),
  })

function RegisterScreen() {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pendaftaran Solat Jumaat</Text>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{ name: '', phoneno: '' }}
        onSubmit={async (values) => {
          try {
            const userToken = await registerUser(values)
            Alert.alert(
              'Berjaya didaftar!',
              'Anda akan diberitahu jika terpilih untuk menghadiri Solat Jumaat.',
              [
                {
                  text: 'OK', onPress: () => signUp({ userToken })
                }
              ]
            );
          }
          catch(err) {
            console.log(err);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, 
        errors, touched, isValid}) => (
          <>
            <TextInput
              name="name"
              placeholder="Nama"
              style={styles.box}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {(errors.name && touched.name) &&
              <Text style={styles.errorText}>{errors.name}</Text>
            }
            <TextInput
              name="phoneno"
              placeholder="Nombor Telefon"
              style={styles.box}
              onChangeText={handleChange('phoneno')}
              onBlur={handleBlur('phoneno')}
              value={values.phoneno}
              keyboardType="numeric"
            />
            {(errors.phoneno && touched.phoneno) &&
              <Text style={styles.errorText}>{errors.phoneno}</Text>
            }
            <View  style={styles.fitToText}>
              <Button disabled={!isValid} onPress={handleSubmit} title="Daftar" />
            </View>
          </>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
}

const registerUser = async (values) => {
  try {
    const response = await axios.post(`${baseURL}/api/register`, {
      name: values.name,
      phoneno: values.phoneno
    })
    return response.data.userToken;
  }
  catch(err) {
    console.log(err);
  }
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
    top:350,
    backgroundColor: "#F194FF"
  },
  errorText: {
    marginHorizontal:10,
    marginVertical:5,
    fontSize:14,
    top:250,
    color:'red'
  }
});

export default RegisterScreen;
