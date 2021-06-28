import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Form,
  FormContent,
  FormWrap,
  Icon,
  SignInContainer,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "../styles/pages/signin";

export default function SignInPage() {
  return (
    <SignInContainer>
      <Head>
        <title>Dolla | Sign In</title>
      </Head>
      <FormWrap>
        <Link href="/" passHref>
          <Icon>dolla</Icon>
        </Link>
        <FormContent>
          <Form action="#">
            <FormTitle>Sign in to your account</FormTitle>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, //Revalidate every 24 hours
  };
};
