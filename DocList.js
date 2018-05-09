import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class DocList extends Component {
   state = {
      names: [
         {
            id: 0,
            Docname: 'DoctorA',
            Spec : 'General',
         },
         {
            id: 1,
            Docname: 'DoctorB',
            Spec : 'Heart',
         },
         {
            id: 2,
            Docname: 'DoctorC',
            Spec : 'Psychhiatry',
         },
         {
            id: 3,
            Docname: 'DoctorD',
            Spec : 'Opthomology',
         }
      ]
   }
   alertItemName = (item) => {
      alert([item.Docname , item.Spec])
   }
   render() {
      return (
         <View> 
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     
                     <Text style = {styles.text}>
                        {item.Docname}
                     </Text>
                     <Text style = {styles.text}>
                        {item.Spec}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default DocList

const styles = StyleSheet.create ({
   container: {
      padding: 30,
      marginTop: 10,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})