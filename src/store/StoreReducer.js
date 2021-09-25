const types = {
  add: "add",
  substract: "substract",
  addLlanta: "addLlanta",
  rmLlanta: "rmLlanta",
  addChoque: "addChoque",
  rmChoque: "rmChoque",
  addAtropello: "addAtropello",
  rmAtropello: "rmAtropello",
  reset: "reset",
};

const initialStore = {
  name: "Renato",
  plate: "APR-022",
  amount: 20,
};



const StoreReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      return { ...state, amount: state.amount + 1 };

    case types.addLlanta:
      return { ...state, amount: state.amount + 15 };

    case types.rmLlanta:
      return { ...state, amount: state.amount - 15};

      case types.addChoque:
      return { ...state, amount: state.amount + 20 };

    case types.rmChoque:
      return { ...state, amount: state.amount - 20};

      case types.addAtropello:
      return { ...state, amount: state.amount + 50 };

    case types.rmAtropello:
      return { ...state, amount: state.amount - 50};

    default:
      return state;
  }
};

export { initialStore, types };

export default StoreReducer;
