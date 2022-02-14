import { Formik, Form } from 'formik';

import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import {
  ErrorMessageName,
  ErrorMessageEmail,
  ErrorMessagePassword,
  ErrorMessageConfirmPassword,
  WrapperForm,
  StyledInput,
  InputName,
  AdditionallyInfo,
  BoxButton,
  WrapperButton,
  StyledLink,
  WrapperLink,
  Title,
  Button,
} from './SignUpForm.styled';
// import * as authOperations from '../../redux/Auth/Auth-operations';

import { SignUpSchema } from '../../helpers/validationShema';

export default function SignUpForm() {
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ name, email, password }) => {
    // dispatch(authOperations.signup({ name, email, password }));
  };

  return (
    <>
      <WrapperForm>
        <Title>Sign Up</Title>
        <Formik
          initialValues={initialValues}
          validatedOnBlur
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, handleSubmit, dirty }) => (
            <Form onSubmit={handleSubmit}>
              <StyledInput name="name" type="text" placeholder="Name" />
              {errors.name && touched.name && <ErrorMessageName>{errors.name}</ErrorMessageName>}

              <StyledInput name="email" type="email" placeholder="your@email.com" />
              {errors.email && touched.email && (
                <ErrorMessageEmail>{errors.email}</ErrorMessageEmail>
              )}

              <StyledInput
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <ErrorMessagePassword>{errors.password}</ErrorMessagePassword>
              )}

              <BoxButton>
                <WrapperLink>
                  <StyledLink to="/login">LogIn</StyledLink>
                </WrapperLink>
                <Button disabled={!isValid && !dirty}> Sign Up</Button>
              </BoxButton>
            </Form>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
}
