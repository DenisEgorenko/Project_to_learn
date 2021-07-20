import React from 'react';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup'
import {Redirect} from "react-router";


function Login(props) {

    if (props.isAuth) {
        return <Redirect to={"/Profile"}/>
    } else {

        return <div>

            <h1>Login Page</h1>


            <Formik
                initialValues={
                    {
                        email: '',
                        password: '',
                        rememberMe: false
                    }
                }
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}

                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    props.logIn(JSON.parse(JSON.stringify(values, null, 2)));
                }}>

                <Form>
                    <label htmlFor={"email"}>Email</label>
                    <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>

                    <label htmlFor={"password"}>Password</label>
                    <Field id="password" name="password" placeholder="****" type="password"/>

                    <label htmlFor={"checkbox"}>Remember Me</label>
                    <Field type="checkbox" name="rememberMe"/>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    }
}

export default Login;