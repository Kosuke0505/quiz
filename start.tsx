import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderBackground } from 'react-navigation-stack';

export default class App extends React.Component {
	render() {
		return (
            <View style={{backgroundColor:'yellow', height:'100%'}}>
                <View style={styles.container}>
                <Text style={styles.title}>ちんむ</Text>
                    <View style={{backgroundColor:'yellow'}}>
                        <Button
                            title="start"
                            onPress={() => {this.goquestion();}}>
                        </Button>
                    </View>
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
    title: {
        backgroundColor:'yellow',
        fontSize:50,
        fontFamily:"Arial",
    }

  });