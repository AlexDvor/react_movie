import { Formik, Form } from 'formik';
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
// import * as authOperations from '../../redux/Auth/Auth-operations';

import { SignUpSchema } from '../../helpers/validationShema';

export default function SignUpForm() {
  // const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
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
                <Button disabled={!isValid && !dirty}> Sign Up</Button>
              </BoxButton>
            </Form>
          )}
        </Formik>
      </WrapperForm>
    </>
  );
}
