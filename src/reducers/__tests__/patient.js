import { Map, List } from 'immutable';

import patient from '../patient';

//import single action constants
import {
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  STAR_SINGLE_QUESTION,
  STAR_SINGLE_QUESTION_SUCCESS,
  STAR_SINGLE_QUESTION_ERROR,
} from '../../constants/';


//add fav
const addSingleDoctorFavAction = {
  type: ADD_SINGLE_DOCTOR_FAV,
};

const addSingleDoctorFavSuccessAction = {
  type: ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  doctor: {},
};

const addSingleDoctorFavErrorAction = {
  type: ADD_SINGLE_DOCTOR_FAV_ERROR,
};



//star single question
const starSingleQuestionAction = {
  type: STAR_SINGLE_QUESTION,
};

const starSingleQuestionSuccessAction = {
  type: STAR_SINGLE_QUESTION_SUCCESS,
  question: {},
};

const starSingleQuestionErrorAction = {
  type: STAR_SINGLE_QUESTION_ERROR,
};

//patient single reducers
const initialPatientValue = Map({
  doctorFav: List([]),
  postFav: List([]),
  questionStar: List([]),
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

test('the patient reducer work as well', () => {
  //test doctor
  expect(patient(initialPatientValue, addSingleDoctorFavAction)).toMatchSnapshot();
  expect(patient(initialPatientValue.merge({ isLoadingData: true }), addSingleDoctorFavSuccessAction)).toMatchSnapshot();
  expect(patient(initialPatientValue.merge({ isLoadingData: true }), addSingleDoctorFavErrorAction)).toMatchSnapshot();

  //test patient
  expect(patient(initialPatientValue, starSingleQuestionAction)).toMatchSnapshot();
  expect(patient(initialPatientValue.merge({ isLoadingData: true }), starSingleQuestionSuccessAction)).toMatchSnapshot();
  expect(patient(initialPatientValue.merge({ isLoadingData: true }), starSingleQuestionErrorAction)).toMatchSnapshot();
});