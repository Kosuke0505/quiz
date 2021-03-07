import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  text: {
    fontSize:30,
    color: 'blue',
  },
  title: {
    height: '20%',
    justifyContent: 'center',
  },
  quiz: {
    height: '40%',
    justifyContent:'center',
    alignItems: 'center',
  }

});
const quizlist = [
  {
    title: '問題1',
    content: '問題文',
    answers: [
      {answer:'answer1', check: false },
      {answer:'answer2', check: false },
      {answer:'answer3', check: false },
      {answer:'answer4', check: true }
     ]
    },
    {
      title: '問題2',
      content: '問題文',
      answers: [
        {answer:'nswer1', check: false },
        {answer:'nswer2', check: false },
        {answer:'nswer3', check: false },
        {answer:'nswer4', check: true }
       ]
      },
      {
        title: '問題3',
        content: '問題文',
        answers: [
          {answer:'swer1', check: false },
          {answer:'swer2', check: false },
          {answer:'swer3', check: false },
          {answer:'swer4', check: true }
         ]
        },
        {
          title: '問題4',
          content: '問題文',
          answers: [
            {answer:'wer1', check: false },
            {answer:'wer2', check: false },
            {answer:'wer3', check: false },
            {answer:'wer4', check: true }
           ]
          },
          {
            title: '問題5',
            content: '問題文',
            answers: [
              {answer:'ans', check: false },
              {answer:'ans2', check: false },
              {answer:'ans3', check: false },
              {answer:'ar4', check: true }
             ]
            },

]

export default class App extends React.Component { //コンポートネント宣言
  constructor(props: any) {  //初期化処理
    super(props);
    let quiz = {};      //変数宣言（色々入る）
    if (props.navigation.state.params &&　props.navigation.state.params.quiz_number) {
      console.log('if')
      console.log('test', props.navigation.state.params);
      quiz = quizlist[props.navigation.state.params.quiz_number];
    } else {      //現状こっちに飛んでるg
      console.log('else')
      quiz = quizlist[0];
    }

    this.state = {
      quiz: quiz
    }
  }

	render() {
		return (
      <View style={{ height:'100%'}}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.text}>{this.state.quiz.title}</Text>
          </View>
          <View style={styles.quiz}>
            <View style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 10,
              margin: 1,
              }}>
              <Text>{this.state.quiz.content}</Text>
            </View>
          </View>
          <View>

            {this.showButtons()}

          </View>
        </View>
      </View>
			);
  }
  goanswer(check: boolean){
    //console.log('check', check);
		this.props.navigation.navigate('Select3',
     {
       check:check,
       answer:this.state.quiz.answers.find((data: any) => data.check).answer});
  }

  showButtons():any[] {
    const dataList = [];
    for (let i = 0; i < this.state.quiz.answers.length; i++) {
      dataList.push(
      <Button
        key={this.state.quiz.answers[i].answer}
        title={this.state.quiz.answers[i].answer}
        onPress={() => {this.goanswer(this.state.quiz.answers[i].check);}}>
      </Button>
      )
    }
    return dataList;
  }
}
 
  