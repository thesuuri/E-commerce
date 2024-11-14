import { SignUp } from "@clerk/clerk-react";

function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}

export default SignUpPage;
