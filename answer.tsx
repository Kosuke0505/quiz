import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props:any){
    super(props);
    this.state = {
      result: props.navigation.state.params.check,
      answer: props.navigation.state.params.answer,
    }
    console.log(props);
    console.log(props.navigation.state.params.answer);
  }
    render() {
        return (
            <View style={{ height:'100%'}}>
                <View style={styles.container}>
                <View style={styles.result}>
                  {
                    this.showResult()
                  }
                    
                </View>
                <View style={styles.coment}>
                    <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 10,
                    margin: 1,
                    }}>
                    <Text style={styles.text}>{this.state.answer}</Text>
                    </View>
                </View>
                <View style={styles.next}>
                <Button
                  title="次へ"
                  onPress={() => {this.props.navigation.navigate('Select2', {quiz_number: 4});}}>
                </Button>
                </View>
                </View>
            </View>
            );
    }

    showResult():any {
      if (this.state.result) {
        return (<Text style={styles.text}>〇</Text>);
      } else {
        return (<Text style={styles.text}>×</Text>);
      }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize:30,
      color: 'blue',
    },
    result: {
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    coment: {
      height: '40%',
      justifyContent:'center',
      alignItems: 'center',
    },
    next: {
      height: '20%',
      justifyContent:'center',
      alignItems: 'center',
    }
  
  });