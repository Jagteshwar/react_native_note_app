import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
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
      <CustomButton title={'Login'} />
      <Text style={styles.signupTxt} onPress={()=>{
        navigation.navigate('SignUp')
      }}>
        Or create new Account <Text style={styles.signUp}>Sign Up</Text></Text>
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
  signupTxt: {
    alignSelf: 'center',
    marginTop: 20,
  },
  signUp: {
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 600,
    color: 'blue'
  },
});
