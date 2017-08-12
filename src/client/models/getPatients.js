import $ from 'jquery';

// This is a toy example to demonstrate using Redux and Ajax
// We tell our store that we have made a request with dispatch(requestPatients)
// Maybe this sets a key in our store: 'fetching'
// On success, we tell the store that we have data, and process the data (like rendering it)
// In other words, we don't make Ajax calls within our store, or the reducers

let dispatch;
let requestPatients;
let receivedPatients;

const getAllPatients = () => {
  dispatch(requestPatients);
  $.ajax({
    type: 'GET',
    url: '/ourAPI',
    contentType: 'application/json',
    success: ((data) => {
      dispatch(receivedPatients(data));
    }),
  });
};


export default getAllPatients;
