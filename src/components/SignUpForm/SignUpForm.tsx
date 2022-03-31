import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../../redux/auth/auth-operations';
import { getUsername, getSentLetter } from '../../redux/auth/auth-selectors';
import { SignUpSchema } from '../../helpers/validationShema';
import ConfirmEmail from '../ConfirmEmail/ConfirmEmail';
import {
  ErrorMessage,
  WrapperForm,
  StyledInput,
  BoxButton,
  StyledLink,
  WrapperLink,
  Title,
  WrapperInput,
  Button,
} from './SignUpForm.styled';

type TUserData = {
  email: string;
  name: string;
  password: string;
};


export default function SignUpForm() {
  const isSentLetter = useSelector(getSentLetter);
  const userName = useSelector(getUsername);
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (value:TUserData) => {
    dispatch(authOperations.signup(value));
  };

  return (
    <>
      {!isSentLetter ? (
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
                <WrapperInput>
                  <StyledInput name="name" type="text" placeholder="Name" />
                  {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </WrapperInput>

                <WrapperInput>
                  <StyledInput name="email" type="email" placeholder="your@email.com" />
                  {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </WrapperInput>

                <WrapperInput>
                  <StyledInput
                    type="password"
                    name="password"
                    autoComplete="on"
                    placeholder="Password"
                  />
                  {touched.password && errors.password && (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  )}
                </WrapperInput>

                <BoxButton>
                  <WrapperLink>
                    <StyledLink to="/login">LogIn</StyledLink>
                  </WrapperLink>
                  <Button disabled={!isValid && !dirty} type="submit">
                    Sign In
                  </Button>
                </BoxButton>
              </Form>
            )}
          </Formik>
        </WrapperForm>
      ) : (
        <ConfirmEmail name={userName} />
      )}
    </>
  );
}
