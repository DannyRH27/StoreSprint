import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE__SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

export const signup = (user) => (dispatch) => {
    return APIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const login = (user) => (dispatch) => {
    return APIUtil.login(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
        .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const update = (user) => (dispatch) => {
  return APIUtil.update(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => (dispatch) => {
    return APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchCurrentUser = () => (dispatch) => {
  return APIUtil.currentUser()
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)))
}