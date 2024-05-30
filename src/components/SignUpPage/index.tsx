import { TRegisterForm } from "@src/utils/schema";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
type SignUpPageProps = {
  onSubmit: SubmitHandler<TRegisterForm>;
  signUpForm: UseFormReturn<TRegisterForm>;
};

function SignUpPageView({ onSubmit, signUpForm }: SignUpPageProps) {
  const { register, handleSubmit } = signUpForm;
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-md shadow-sm">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 w-[400px]"
        >
          <h2 className="text-lg font-semibold text-gray-900">Sign Up</h2>
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signUpForm.formState.errors.username && (
              <span className="absolute -bottom-6 text-red-600 text-sm font-medium">
                {signUpForm.formState.errors.username.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signUpForm.formState.errors.email && (
              <span className="absolute -bottom-6 text-red-600 text-sm font-medium">
                {signUpForm.formState.errors.email.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signUpForm.formState.errors.password && (
              <span className="absolute -bottom-6 text-red-600 text-sm font-medium">
                {signUpForm.formState.errors.password.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signUpForm.formState.errors.confirmPassword && (
              <span className="absolute -bottom-6 text-red-600">
                {signUpForm.formState.errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            id="sign-up"
            type="submit"
            className="w-full flex justify-center mt-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPageView;
