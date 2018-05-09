import React from 'react';
import { Alert, Button, TextInput, View,Text, StyleSheet } from 'react-native';
import Form from './form.js';
import DocList from './DocList.js';
export default class App extends React.Component {
	constructor(props) {
    super(props);
    
    this.state ={
      isloginok : false,
      issaadok :true ,
      appmessage : "This is a message"
    };
  }
  handlelogin = (isok) => {
    this.state.isloginok = isok;
    this.setState({});

  }
  render() {
    return (
      this.state.isloginok === false?<Form appstate={this.state} handlelogin = { this.handlelogin } /> : <DocList /> 
    );
  }
}
