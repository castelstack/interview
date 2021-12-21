import React from "react";
import { Input, PasswordInput } from "../../components/common/input";
import { Heading } from "../../constant/styles/text";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/button/btn";
import { paddingX } from "../../constant/styles/spacing";

const SignupPage = () => {
  return (
    <div className={`w-auto flex place-content-center `}>
      <div
        className='grid grid-cols-1 gap-4 items-center py-12 sm:px-8 px-3 rounded
                   bg-gray-100 shadow-white 
                    dark:bg-dark-800 sm:w-2/4 w-full'
      >
        <Heading className='justify-self-center text-center capitalize'>
          Sign up
        </Heading>
        <p className='text-gray-800 dark:text-gray-300 text-sm text-center'>
          I already have an account?{" "}
          <Link to='/login' className='text-primary-900 text-sm text-center'>
            Log in
          </Link>
        </p>
        <form className='grid grid-cols-1 justify-items-center gap-2'>
          <div className='flex items-center sm:flex-row flex-col w-full gap-4'>
            <Input label='lastname' placeholder='Lastname' />
            <Input label='firstName' placeholder='First Name' />
          </div>
          <Input label='Email' placeholder='Email' />
          <PasswordInput label='create password' placeholder='Password' />
          <Button className='justify-self-center mt-4'>Sign Up</Button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
