import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../Common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";



const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={"login"} component={Input} validate={requiredField}/>
            </div>
            <div>
                <Field type="password" name={"password"} component={Input} validate={requiredField}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);
export default Login;