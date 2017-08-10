const patients = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PATIENT':
      return [
        ...state,
        {
          id: action.id,
          userId: action.userId,
          firstName: action.firstName,
          lastName: action.lastName,
          sex: action.sex,
          birthdate: action.birthdate,
          age: action.age,
          providerId: action.providerId
        },
      ];
    default:
      return state;
  }
};

export { patients };
