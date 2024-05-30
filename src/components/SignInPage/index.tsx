import { TLoginForm } from "@src/utils/schema";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
type SignInPageProps = {
  onSubmit: SubmitHandler<TLoginForm>;
  signInForm: UseFormReturn<TLoginForm>;
};

function SignInPageView({ onSubmit, signInForm }: SignInPageProps) {
  const { register, handleSubmit } = signInForm;
  console.log("signInForm : ", signInForm.formState.errors);

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="max-w-sm mx-auto my-10 p-6 border border-gray-300 rounded-md shadow-sm">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <h2 className="text-lg font-semibold text-gray-900">SignInPage</h2>
          <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              {...register("email")}
              type="text"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signInForm.formState.errors.email && (
              <span className="absolute -bottom-6 text-red-600 text-sm font-medium">
                {signInForm.formState.errors.email.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {signInForm.formState.errors.password && (
              <span className="absolute -bottom-6 text-red-600 text-sm font-medium">
                {signInForm.formState.errors.password.message}
              </span>
            )}
          </div>
          <button
            id="sign-in"
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInPageView;
