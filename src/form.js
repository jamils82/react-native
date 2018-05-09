import React from 'react';
import { Alert, Button, TextInput, View,Text, StyleSheet } from 'react-native';

export default class Form extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }
  render() {
    return (
        <View style={styles.container}>
		<Text style={styles.Text}> Login Form</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.button}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	
  container: {
	  
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 50,
  },
  	
    input: {
    width: 350,
    height: 44,
    padding: 10,
	justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  button: {
	
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  Text: {
	  height :40,
	  width : 250,
	  justifyContent: 'center',
	  fontWeight: 'bold',
	  alignItems: 'center',
	  flexDirection: 'column'
  }
});
