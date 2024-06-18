export interface EmailState {
    email: string;
  }
  
  export enum EmailActionTypes {
    SET_EMAIL = "SET_EMAIL",
  }
  
  interface SetEmailAction {
    type: EmailActionTypes.SET_EMAIL;
    payload: string;
  }
  
  export type EmailAction = SetEmailAction;
  