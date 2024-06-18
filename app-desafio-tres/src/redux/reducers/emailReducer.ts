import { EmailAction, EmailActionTypes, EmailState } from "../types/emailTypes";

const initialState: EmailState = {
  email: "",
};

const emailReducer = (state = initialState, action: EmailAction): EmailState => {
  switch (action.type) {
    case EmailActionTypes.SET_EMAIL:
      return {...state, email: action.payload };
    default:
      return state;
  }
};

export default emailReducer;
