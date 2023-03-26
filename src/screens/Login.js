import { Link, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import CustomButton from '../common/CustomButton';
import CustomTextInput from '../common/CustomTextInput';
import { NavigationContext } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = React.useContext(NavigationContext);

  const handleLogin = () => {
    navigation.navigate("Home")
    // handle login logic here
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../images/Logo.png")} style={{width:"100%",height:"100%"}}/> */}

      <Text style={styles.title}>Login</Text>
      <CustomTextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        placeholderTextColor="#000"
      />
      <CustomTextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="#000"
      />
      <CustomButton style={styles.button} onPress={handleLogin} buttonText = {"Log In"} textStyles = {styles.buttonText}/>
      <Text style={styles.createAccount} onPress={()=>{navigation.navigate("Home")}}>Create New Account ?</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color : "#000"
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#0d2329',
    borderRadius: 5,
    padding: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  createAccount : {
    fontSize: 18,
    marginTop : 20,
    fontWeight : '800',
    textDecorationLine : 'underline'
}
});

export default Login;
