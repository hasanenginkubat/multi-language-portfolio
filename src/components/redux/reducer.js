const initalState = {
language: ""

}

const languageReducer = (state = initalState, action) => {
switch(action.type){
  case "CHANGE_LANGUAGE":
    return {language: action.payload}
    default:
        return state;
}
}
export default languageReducer;
