import React from "react";
import { Input, PasswordInput } from "../../components/common/input";
import Layout from "../../constant/layout/layout";
import { Heading } from "../../constant/styles/text";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/btn";
import { paddingX } from "../../constant/styles/spacing";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  return (
    <div className={`w-auto flex place-content-center items-center`}>
      <div
        className='grid grid-cols-1 gap-4 items-center py-12 sm:px-8 px-3 rounded
                            bg-gray-100 shadow-white  dark:shadow-new-3
                            dark:bg-dark-800 sm:w-2/4 w-full'
      >
        <Heading className='justify-self-center text-center'>Login</Heading>
        <p className='text-gray-800 dark:text-gray-400 text-sm text-center'>
          If you already have an account? <br/> <Link to='/signup' className='text-primary-900 text-sm text-center'>Signup</Link>
        </p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required("Input email url"),
          password: Yup.string().required("Input password"),
        })}
      >
        {(formik) => (
          <form
            className='grid  grid-cols-1 justify-items-center gap-2  '
            onSubmit={formik.handleSubmit}
          >
            <Input
              id='email'
              type='email'
              label='email'
              placeholder='Email'
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='text-xs text-red-500'>{formik.errors.email}</p>
            ) : null}
            <PasswordInput
              id='password'
              label='password'
              placeholder='Password'
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className='text-xs text-red-500'>{formik.errors.password}</p>
            ) : null}
            <Button className='mt-8' type='submit'>
              Login
            </Button>
          </form>
        )}
        </Formik>
       
        </div>

      {/* <div
        className='grid grid-cols-1 gap-4 items-center py-12 sm:px-8 px-3 rounded
                            bg-gray-100 shadow-white  dark:shadow-new-3
                            dark:bg-dark-800 sm:w-2/4 w-full'
      >
        <Heading className='justify-self-center text-center'>Login</Heading>
        <form className='grid  grid-cols-1 justify-items-center gap-2  '>
          <Input label='email' placeholder='goal' />
          <PasswordInput label='password' placeholder='goal' />
          <Button className='mt-4'>Login</Button>
        </form>
        <p className='text-gray-800 text-sm text-center'>
          You don't have an account? <Link to='/signup' className='text-primary-900 text-sm text-center'>Signup</Link>
        </p>
      </div> */}
    </div>
  );
};

export default LoginPage;
