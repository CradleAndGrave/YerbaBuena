// @flow
import type { userType, patientsType, notesType, treatmentsType } from './stateType';

const initialState =
      {
        user: {
          username: null,
          password: null,
          specialty: null,
          isAuthenticated: false
        },
        patients: [
          { userId: 1, userType: 1, providerId: 3, firstName: 'Ash', lastName: 'Woodall', sex: 'female', birthdate: '', age: '' },
          { userId: 2, userType: 1, providerId: 6, firstName: 'Zeus', lastName: 'Esquivel', sex: 'male', birthdate: '', age: '' },
          { userId: 4, userType: 1, providerId: 3, firstName: 'Tim', lastName: 'Roy', sex: 'male', birthdate: '', age: '' },
          { userId: 5, userType: 1, providerId: null, firstName: 'Shehbaz', lastName: 'Sherwani', sex: 'male', birthdate: '03/25/89', age: '28' },
        ],
        treatments: [
          { userId: 1, name: 'caffeine', dose: '20000 g', notes: 'totes da best', action: 1, datetime: '08/10/17 14:00' },
          { userId: 4, name: 'caffeine', dose: '20000 g', notes: 'also pretty good', action: 1, datetime: '08/10/17 14:30' },
          { userId: 5, name: 'caffeine', dose: '20000 g', notes: 'rocking', action: 1, datetime: '08/10/17 15:00' },
          { userId: 2, name: 'caffeine', dose: '20000 g', notes: 'awesome', action: 1, datetime: '08/10/17 15:30' },
          { userId: 1, name: 'melotonine', dose: '2 g', notes: 'that caffeine works all night', action: 1, datetime: '08/11/17 14:00' },
          { userId: 1, name: 'melotonine', dose: '2 g', notes: 'ash chose to exercise daily instead of sleepy time drugs', action: -1, datetime: '08/18/17 14:00' }],
        notes: [
          { userId: 1, body: 'totes da best', datetime: '08/10/17 14:00' },
          { userId: 4, body: 'great geans', datetime: '08/10/17 14:30' },
          { userId: 5, body: 'this dude abides', datetime: '08/10/17 15:00' },
          { userId: 2, body: 'swagger hound', datetime: '08/10/17 15:30' },
          { userId: 1, body: 'great hair', datetime: '08/11/17 14:01' }
        ]
      };

const user = (state: userType = initialState.user, action: Object) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, ...state, {
        username: action.username,
        password: action.password,
        specialty: action.specialty,
        isAuthenticated: true
      });
    case 'SIGNUP':
      return Object.assign({}, ...state, {
        username: action.username,
        password: action.password,
        specialty: action.specialty,
        isAuthenticated: true
      });
    case 'LOGOUT':
      return Object.assign({}, ...state, {
        username: null,
        password: null,
        specialty: null,
        isAuthenticated: false
      });
    default:
      return state;
  }
}


const patients = (state: patientsType = initialState.patients, action: Object) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return [...state, {
        userId: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        type: action.userType,
        providerId: action.providerId,
        sex: action.sex,
        birthdate: action.birthdate,
        age: action.age
      }];
    default:
      return state;
  }
};

const notes = (state: notesType = initialState.notes, action: Object) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, {
        userId: action.id,
        body: action.body,
        datetime: action.datetime
      }];
    default:
      return state;
  }
};

const treatments = (state: treatmentsType = initialState.treatments, action: Object) => {
  switch (action.type) {
    case 'ADD_TREATMENT':
      return [...state, {
        id: action.userId,
        name: action.name,
        dose: action.dose,
        notes: action.notes,
        action: action.action,
        datetime: action.datetime
      }];
    default:
      return state;
  }
};

export { user, patients, notes, treatments };
