import { Http } from './Api.service';
import { url } from './ApiEndPoints';

export const userService = {
    userSignup, userLogin, forgotPassword
}

async function userLogin(Obj: Object): Promise<any> {
    try {
        const response = await new Http().post(url.login, Obj);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

async function userSignup(Obj: Object): Promise<any> {
    try {
        const response = await new Http().post(url.signup, Obj);
        return response.data;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}
async function forgotPassword(Obj: Object): Promise<any> {
    try {
        const response = await new Http().post(url.forgotPassword, Obj);
        if (response.status === 200) {
            return {
                isError: false,
                data: response.data
            }
        } else {
            return {
                isError: true,
                data: response.data
            }
        }
    } catch (error) {
        console.log('error', error);
        return error;
    }
}


