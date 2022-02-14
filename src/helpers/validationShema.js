import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('Should be a string')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .required('This field is required'),
  email: yup.string().email('Please enter a valid email').required('This field is required'),
  password: yup
    .string()
    .typeError('Should be a string')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .required('This field is required'),
});

export { SignUpSchema };
