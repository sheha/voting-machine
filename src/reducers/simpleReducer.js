export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      return {
        result: action.payload
      };
    case "LOAD_LOCAL_DATA":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
