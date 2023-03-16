import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.textLogin}>
          Login
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.card}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.card}>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonEntrar}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.buttonGoogle}>
          <AntDesign name="google" color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFacebook}>
          <MaterialCommunityIcons name="facebook" color="#fff" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLinkedin}>
          <Entypo name="linkedin-with-circle" color="#fff" size={25} />
        </TouchableOpacity>
      </View>
      <View style={{ top: "0%" }}>
        <Text style={styles.textOu}>
          ou
        </Text>
        <TouchableOpacity>
          <Text style={styles.textCadastro}>
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 160,
  },
  textLogin: {
    fontSize: 40,
    color: '#fff',
    fontFamily: 'BreeSerif-Regular',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding: 10,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#B0C4DE'
  },
  loginButton: {
    backgroundColor: '#4ebe37',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonEntrar: {
    color: '#fff',
    fontSize: 16,
  },
  viewButtons: {
    marginTop: '5%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonGoogle: {
    width: 50,
    height: 50,
    backgroundColor: '#DB4A39',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFacebook: {
    width: 50,
    height: 50,
    backgroundColor: '#3B5998',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLinkedin: {
    width: 50,
    height: 50,
    backgroundColor: '#0E76A8',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textOu: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  textCadastro: {
    color: '#ffe465',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
});

export default LoginScreen;

