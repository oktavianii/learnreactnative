import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Judul/>
        <Text>Nama  : Widya Oktaviani</Text>
        <Text>Kelas : XI RPL 1</Text>
        <Text>Absen : 39</Text>

        <Image 
        style={{width: 300, height:300}}
        source={require('./foto.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
