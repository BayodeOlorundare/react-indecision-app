import  database  from '../firebase/firebase';

// ADD_OPTION

export const addOption = (option) => ({
  type: 'ADD_OPTION',
  option,
});

export const startAddOption = (option = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      text = ""
    } = option;
    const item = { text };
    return database.ref(`users/${uid}/options`).push(item).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...item
      }));
    })
    .catch(e => console.log(e));
  };
};

// REMOVE_OPTION

export const removeOption = ({ id } = {}) => ({
  type: 'REMOVE_OPTION',
  id,
});


export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/options/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    })
    .catch(e => console.log(e));
  };
};

// REMOVE_OPTION

export const removeAll = () => ({
  type: 'REMOVE_ALL',
});

export const startRemoveAll = () => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return database
    .ref(`users/${uid}/options`)
    .remove()
    .then(() => {
      dispatch(removeAll());
    })
    .catch(e => console.log(e));
};

export const setOptions = options => ({
  type: 'SET_OPTIONS',
  options,
});

export const startSetOptions = () => (dispatch, getState) => {
  const { auth: { uid } } = getState();
  return databases
    .ref(`users/${uid}/options`)
    .once('value')
    .then(snapshot => {
      const options = [];
      snapshot.forEach(childSnapshot => {
        options.push({
          id: childSnapshot.key,
          text: childSnapshot.val().text,
        });
      });
      dispatch(setOptions(options));
    })
    .catch(e => console.log(e));
};
