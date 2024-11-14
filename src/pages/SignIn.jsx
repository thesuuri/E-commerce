import { SignIn } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}

export default SignInPage;
