import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export const SignUp = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create New Account</Text>
      <TextInput
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
        style={styles.input}
        placeholder="Enter Name"
      />
      <TextInput
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
        style={styles.input}
        placeholder="Enter Email"
      />
      <TextInput
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
        style={styles.input}
        placeholder="Enter Password"
      />
      <CustomButton title={'SignUp'} />
      <Text style={styles.loginTxt} onPress={()=>{
        navigation.navigate('Login')
      }}>
        Already have an account? <Text style={styles.login}>Login</Text></Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    alignSelf: 'center',
    marginTop: 200,
    marginBottom: 30,
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 48,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  loginTxt: {
    alignSelf: 'center',
    marginTop: 20,
  },
  login: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 600,
    color: 'blue'
  },
});
