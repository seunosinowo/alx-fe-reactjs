import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  fieldName: '',
};

const validationSchema = Yup.object({
  fieldName: Yup.string().required('Field Name is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="fieldName">Field Name</label>
            <Field type="text" name="fieldName" />
            <ErrorMessage name="fieldName" component="div" />
          </div>
          {/* Add more fields as needed */}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
