import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
            <View style={{backgroundColor:'yellow', height:'100%'}}>
                <View style={styles.container}>
                <Text>クイズゲーム</Text>
                <Button
                    title="start"
                    onPress={() => {this.goquestion();}}>
                </Button>
                </View>
            </View>
			);
  }
  goquestion(){
        console.log('test');
		this.props.navigation.navigate('Select2');
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
  });