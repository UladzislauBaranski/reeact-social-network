import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../Common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

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
                <Field type="text" name="email" placeholder={"email"} component={Input} validate={requiredField}/>
            </div>
            <div>
                <Field type="password" name="password" placeholder={"password"} component={Input}
                       validate={requiredField}/>
            </div>
            <div>
                <Field type="checkbox" name="rememberMe" component={Input}/> remember me
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


/*todo*/
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(LoginPage);

