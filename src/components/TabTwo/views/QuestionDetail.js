import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, ScrollView, Image, TouchableHighlight, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_IMG,

  STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_ANSWERS,

  GET_SINGLE_QUESTION_ANSWER,
  GET_SINGLE_QUESTION_ANSWER_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,


} from '../../../constants/'

//import selector for computing data
import { getSingleQaSelector } from '../../../selectors/';

import { Header } from '../../common/';

//import tag box
import { TagBox } from '../../common/';

//import handle func
import { handleQuestion, handleAnswers } from '../data/';

//import style
import { QaDetailStyle as styles } from '../styles/';
import { BottomButtonStyle as btnStyles} from '../../styles/';


//import list
import { UltimateFlatList } from '../../common/';

//import item
import QaAnswerListItem from './QaAnswerListItem';

const EXMAPLES = [
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
  {
    photo: 'https://facebook.github.io/react/img/logo_og.png'
  },
];

class QuestionDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_QUESTION, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_IMG, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_ANSWERS, payload: { token, id, refresh: true }});
  }

  handleBtn = () => {
    const { navigation } = this.props;
    const { token, id } = navigation.state.params;
    navigation.navigate('NewAnswer', { id, token });
  }

  render() {
    const { question, doctorId, AllImg, dispatch, navigation, answers } = this.props;
    const { token, id } = navigation.state.params;

    console.log('question', question);

    let answerList = [];
    if (answers) {
      answerList = handleAnswers(answers.get('results'));
      console.log('answerList', answerList);
    }

    let IMGS = [];
    if (AllImg) {
      AllImg.map(item => {
        IMGS.push({
          photo: item.get('image'),
        })
      });
    }

    let header = null;
    if (question) {
      header = () => (
        <View style={styles.questionContainer}>
          <View style={styles.topBox}>
              <Text style={styles.title}>
                {question.get('title')}
              </Text>  
              
            </View>
            <View style={styles.body}>
              <Text style={styles.content}>{question.get('body')}</Text>
            </View>
            
            <View style={styles.imgBox}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {
                  IMGS.map((item, key) => (
                    <TouchableOpacity key={key} onPress={() => navigation.navigate('ImageView', { media: IMGS })}>
                      <Image source={{ uri: item.photo }} style={styles.photo} />
                    </TouchableOpacity>
                  ))
                }
              </ScrollView>
            </View>
            <View style={styles.tagContainer}>
              <TagBox 
                star={true} 
                item={handleQuestion(question)} 
                notShowBtn={true}
                navigation={navigation}
                token={token}
              />
            </View>
            <View style={styles.graySpace}/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Header
          logoLeft={true}
          headerText={"问题详情"}
          navigation={navigation}
          showGradient={true}
        />
        {
          answers && (
            <UltimateFlatList
              listStyle={{
                  flex: 1,
                  backgroundColor: '#F5F6F7',
              }}
              header={header}
              listData={answerList}
              method={GET_SINGLE_QUESTION_ALL_ANSWERS}
              data={answers}
              dispatch={this.props.dispatch}
              token={token}
              id={id}
              footText={ answerList.length ? "到底了哦..." : "啊哦！还没有回答哦"}
              renderItem={(item) => <QaAnswerListItem userId={doctorId} token={token} navigation={navigation} item={item} />}
            />
          )
        }

        <View style={[ btnStyles.BottomBox ]}>
          <TouchableHighlight onPress={() => { this.handleBtn() }} style={btnStyles.buttonContainer}>
            <View style={btnStyles.buttonBox}>
              <Text style={[ btnStyles.content, this.props.textStyle ]}>我来回答</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(QuestionDetail);