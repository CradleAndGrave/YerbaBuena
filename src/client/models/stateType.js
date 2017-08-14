// @flow

// export type State =
//   Array<{
//     userId: number,
//     firstName: string,
//     lastName: string,
//     userType: 1 | 2,
//     firstName: string,
//     lastName: string,
//     sex: string,
//     birthdate: string,
//     age: string,
//     providerId: number | null
//   }>;

export type State = {
  user: Object<{
    username: string,
    password: string,
    specialty: string,
    isAuthenticated: boolean
  }>,
  patients: Array<{
    userId: number,
    firstName: string,
    lastName: string,
    sex: string,
    birthdate: string,
    age: string,
    providerId: number | null
  }>,
  treatments: Array<{
    userId: number,
    name: string,
    dose: string,
    notes: string,
    action: number,
    datetime: string
  }>,
  notes: Array<{
    userId: number,
    body: string,
    datetime: string
  }>
};

export type userType = Object<{
  username: string,
  password: string,
  specialty: string,
  isAuthenticated: boolean
}>;

export type patientsType = Array<{
  userId: number,
  firstName: string,
  lastName: string,
  sex: string,
  birthdate: string,
  age: string,
  providerId: number | null
}>;

export type notesType = Array<{
    userId: number,
    body: string,
    datetime: string
}>;

export type treatmentsType = Array<{
    userId: number,
    name: string,
    dose: string,
    notes: string,
    action: number,
    datetime: string
}>;
