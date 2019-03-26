import uniqueId from 'lodash/uniqueId';

const defaultState = [
    { value: 'Met my HR', id: uniqueId(), completed: false },
    { value: 'Submitted all BGV docs', id: uniqueId(), completed: false },
    { value: 'SEZ card', id: uniqueId(), completed: false },
    { value: 'Access to My HCL', id: uniqueId(), completed: false },
    { value: 'Downloaded Medical card', id: uniqueId(), completed: true },
    { value: 'Awareness about iTime', id: uniqueId(), completed: false },
    { value: 'Updated seat no. in ESS', id: uniqueId(), completed: false },
    { value: 'Updated Aadhar, UAN & PAN no. in ESS', id: uniqueId(), completed: false },
    { value: 'Vehichal declaration', id: uniqueId(), completed: false },
    { value: 'E-learnings on iSucess', id: uniqueId(), completed: true },
    { value: 'Flexi declaration', id: uniqueId(), completed: true },
  ];

  export default defaultState;