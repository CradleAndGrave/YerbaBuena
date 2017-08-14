import Patient from './models/patientUser';

const initialState = {
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
    { userId: 4, body: 'great genes', datetime: '08/10/17 14:30' },
    { userId: 5, body: 'this dude abides', datetime: '08/10/17 15:00' },
    { userId: 2, body: 'swagger hound', datetime: '08/10/17 15:30' },
    { userId: 1, body: 'great hair', datetime: '08/11/17 14:01' }
  ]
};

initialState.patients.map(patient =>
  Patient.create(
    {
      username: `${patient.firstName} ${patient.lastName}`,
      password: 'isSecret',
      dob: patient.birthdate,
      sex: patient.sex
    },
    function (err, awesomeInstance) {
      if (err) {
        // eslint-disable-next-line
        console.log(err);
      } else {
        // eslint-disable-next-line
        console.log(awesomeInstance);
      }
    }
  )
);
