import React from "react";
import {
  Input,
  TextArea,
} from "../../components/common/input";
import { Heading } from "../../constant/styles/text";
import { Button } from "../../components/common/button/btn";
import { Formik } from "formik";
import * as Yup from "yup";

const CreateTalk = () => {
  return (
    <div className={`w-auto flex place-content-center items-center`}>
      <div
        className='grid grid-cols-1 gap-4 items-center py-12 sm:px-8 px-3 rounded
                            bg-gray-100 shadow-white  dark:shadow-new-3
                            dark:bg-dark-800  w-full'
      >
        <Heading className='justify-self-center text-center'>
          Create Talk
        </Heading>

        <Formik
          initialValues={{ subject: "", description: "" }}
          validationSchema={Yup.object({
            subject: Yup.string().required("Input subject"),
            description: Yup.string().required("Input description"),
          })}
        >
          {(formik) => (
            <form
              className='grid  grid-cols-1 justify-center gap-2  '
              onSubmit={formik.handleSubmit}
            >
              <Input
                id='subject'
                type='subject'
                label='subject'
                placeholder='subject'
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className='text-xs text-red-500'>{formik.errors.subject}</p>
              ) : null}
              <TextArea
                id='description'
                type='description'
                label='description'
                placeholder='description'
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <p className='text-xs text-red-500'>
                  {formik.errors.description}
                </p>
              ) : null}

              {/* submit */}
              <Button className='mt-8 justify-self-center' type='submit'>
                Create
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateTalk;
