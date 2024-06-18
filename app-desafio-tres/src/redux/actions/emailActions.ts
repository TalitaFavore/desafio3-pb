import { EmailAction, EmailActionTypes } from "../types/emailTypes";

export const setEmail = (email: string): EmailAction => ({
  type: EmailActionTypes.SET_EMAIL,
  payload: email,
});
