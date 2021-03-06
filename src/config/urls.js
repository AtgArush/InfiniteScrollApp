const API_BASE_URL = 'https://api.talktier.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/v1/loginSignupOtp'); //192.../user/login
// export const SIGNUP = getApiUrl('/user/registerUser');
export const VERIFY_OTP = getApiUrl("/user/v1/verifyOtp")
export const GET_USER = getApiUrl("/user/v1/getUserSearch")
// https://api.talktier.com/user/v1/getUserNearMe?name=A
export const SEARCH_USER = getApiUrl("/user/v1/getUserNearMe")
// export const SEARCH_USER = "https://api.talktier.com/user/v1/getUserNearMe?name=A"