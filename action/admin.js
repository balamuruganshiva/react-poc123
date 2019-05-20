import userDetails from './../Application_Info/userDetails';
export const userLogin = () => {
  return (dispatch) =>{
    const uname = localStorage.getItem("uname");
    const pwd = localStorage.getItem("pwd");
    const userDetail = checkLoginUser(userDetails,uname,pwd);  
    if(userDetail){
      userDetail.logged=1;
      dispatch(Userdata(userDetail));     
    }else{
      const errorMsg = {'msg': 'Invalid User Name and Password'};
      dispatch(LoginError(errorMsg));
    }
  }
}
const Userdata = (userDetail) =>{
  return{
        type: 'USER_LOGIN',
        userDetail
      }
}
const LoginError = (errorMsg) =>{
  return{
        type: 'LOGIN_ERROR',
        errorMsg
      }
}
const checkLoginUser = (userDetails,uname,pwd) => {
      if(userDetails){
        const users =userDetails.filter(userDetail => { return userDetail.userName===uname && userDetail.pwd===pwd});
        console.log(users);
         console.log(users[0]);
        return users[0];
      }
}

export const Logout = () =>{
  const logout = true;
  return{
        type: 'LOGOUT',
        logout
      }
}

export const setLocation = (city) =>{
  return{
        type: 'LOCATION',
        city
      }
}