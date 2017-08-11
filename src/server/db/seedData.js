import Patient from './models/patientUser';

const initialState =
      {
        patients: [
          { userId: 1, userType: 2, providerId: 3, firstName: 'Ash', lastName: 'Woodall', sex: 'female', birthdate: '03/25/89', age: '28' },
          { userId: 2, userType: 1, providerId: 6, firstName: 'Zeus', lastName: 'Esquivel', sex: 'male', birthdate: '03/25/89', age: '28' },
          { userId: 4, userType: 1, providerId: 3, firstName: 'Tim', lastName: 'Roy', sex: 'male', birthdate: '12/13/84', age: '32' },
          { userId: 5, userType: 1, providerId: null, firstName: 'Shehbaz', lastName: 'Sherwani', sex: 'male', birthdate: '03/25/89', age: '28' }
        ],
        treatments: [
          { userId: 1, name: 'Ash W', dose: '20000 g of caffeine', notes: 'totes da best', action: 1, datetime: 'always' },
          { userId: 4, name: 'Tim R', dose: '20000 g of caffeine', notes: 'also pretty good', action: 1, datetime: 'the only time is now' },
          { userId: 5, name: 'Shebaz S', dose: '20000 g of caffeine', notes: 'rocking', action: 1, datetime: 'timeless' },
          { userId: 2, name: 'Zeus E', dose: '20000 g of caffeine', notes: 'awesome', action: 1, datetime: 'futuristic' }],
        notes: []
      };

initialState.patients.map(patient =>
                          Patient.create({username: `${patient.firstName} ${patient.lastName}`,
                                          password: 'isSecret',
                                          dob: patient.birthdate,
                                          sex: patient.sex},
                                         function (err, awesome_instance)
                                         {if (err) {
                                           console.log(err)
                                         } else {
                                           console.log(awesome_instance)} }););
