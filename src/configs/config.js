'use strict';

export const base = 'http://119.23.243.2/';

export const homeApi = {
  posts: 'home/posts/',
  hospitals: 'home/hospitals/',
  doctors: 'home/doctors/',
};

export const homeSingleApi = (id) => ({
  singlePost: `home/posts/${id}/`,
  singleHospital: `home/hospitals/${id}/`,
  addSinglePostFav: `home/posts/${id}/fav`,
  cancelSinglePostFav: `home/posts/${id}/unfav`,
  singleHospitalDoctors: `home/hospitals/${id}/doctors/`,
  singleDoctor: `home/doctors/${id}/`,
  singleDoctorInfo: `home/doctors/${id}/info/`,
  singleDoctorAnswers: `home/doctors/${id}/answers/`,
  addSingleDoctorFav: `home/doctors/${id}/fav`,
  cancelSingleDoctorFav: `home/doctors/${id}/unfav`,
  singleDoctorComments: `home/doctors/${id}/comments/`,
  addsingleDoctorComments: 'home/doctors/${id}/comments/new',
});

export const usersApi = {
  register: 'users/register',
  login: 'users/login/',
  requestSmsCode: 'users/request-sms-code',
  verifySmsCode: 'users/verify-sms-code',
  changePassword: 'users/change-password',
  feedback: 'feedback/',
  updateDoctorInfo: 'users/doctor-info/',
  patientProfile: 'users/patient/profile/',
  updateDoctorProfile: 'users/doctor/profile/',
  patientQuestions: 'users/patient/questions/',
  patientFavPosts: 'users/patient/fav-posts/',
  patientFavDoctors: 'users/patient/fav-doctors/',
  patientStarredQuestions: 'users/patient/starred-questions/',
  patientServices: 'users/patient/services/',

  doctorInit: 'users/doctor/init',
  doctorProfile: 'users/doctor/profile/',
  doctorInfo: 'users/doctor/info/',
  doctorIncome: 'users/doctor/income/'
};

export const qaApi = {
  questions: 'qa/questions/',
  addQuestion: 'qa/questions/new',
};

export const qaSingleApi = (id) => ({
  addQuestionImg: `qa/questions/${id}/addimg`,
  singleQuestion: `qa/questions/${id}/`,
  updateSingleQuestion: `qa/questions/${id}/`,
  singleQuestionAllImg: `qa/questions/${id}/images/`,
  singleQuestionStar: `qa/questions/${id}/star`,
  cancelsingleQuestionStar: `qa/questions/${id}/unstar`,
  singleQuestionAnswer: `qa/questions/${id}/answers/`,
  singleAnswer: `qa/answers/${id}/`,
  singleAnswerUpvote: `qa/answers/${id}/upvote/`,
  singleAnswerAllComments: `qa/answers/${id}/comments/`,
  addSingleAnswerComments: `qa/answers/${id}/comments/new`,

  createSingleQuestionAnswer: `qa/questions/${id}/answers/new`,
});


export const serviceApi = {
  acceptOrder: 'services/accept-order',
  doctorService: 'users/doctor/orders/',
};
