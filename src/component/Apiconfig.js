const url="http://172.16.1.132:8521/api/v1";



const Apiconfig={
    user: `${url}/user/usersignup`,
    veryotp :`${url}/user/verifyOTP `,
    login:`${url}/user/userLogin`,
    forgotPassword:`${url}/user/forgotPassword`,
    changePassword:`${url}/user/changePassword`,
    getProfile:`${url}/user/getProfile`,
};
export default Apiconfig;