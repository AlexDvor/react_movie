import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { LogInSchema } from '../../helpers/validationShema';
import * as authOperations from '../../redux/auth/auth-operations';
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
} from './LogInForm.styled';

type TDataLogin = {
  email: string;
  password: string;
};

export default function LogInForm() {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (value: TDataLogin) => {
    dispatch(authOperations.login(value));
  };

  return (
    <>
      <WrapperForm>
        <Title>Log in</Title>
        <Formik
          initialValues={initialValues}
          validatedOnBlur
          validationSchema={LogInSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isValid, handleSubmit, dirty }) => (
            <Form onSubmit={handleSubmit}>
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
                  <StyledLink to="/signup">SignUp</StyledLink>
                </WrapperLink>
                <Button disabled={!isValid && !dirty} type="submit">
                  LogIn
                </Button>
              </BoxButton>
            </Form>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
}
