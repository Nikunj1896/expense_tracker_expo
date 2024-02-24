import { Auth } from "aws-amplify";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

export const useSignUp = () => {
  async function handleSignUp({
    username,
    password,
    email,
    phone_number,
  }: SignUpParameters) {
    try {
      const {} = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return {
    handleSignUp,
  };
};
