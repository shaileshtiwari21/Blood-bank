import { useForm } from "react-hook-form";
import { useState } from "react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [role, setRole] = useState("donar");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="mb-4 font-bold ">Welcome to Log-in😊</h1>
      <div className=" flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex items-center my-4">
            <input
              id="donarRadio"
              type="radio"
              name="role"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              className="ml-2"
              defaultChecked
              {...register("role")}
            />
            <label
              htmlFor="donarRadio"
              className="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Donar
            </label>

            <input
              id="adminRadio"
              type="radio"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              className="ml-2"
              {...register("role")}
            />
            <label
              htmlFor="adminRadio"
              className="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Admin
            </label>

            <input
              id="organisationRadio"
              type="radio"
              name="role"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
              className="ml-2"
              {...register("role")}
            />
            <label
              htmlFor="organisationRadio"
              className="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Organisation
            </label>

            <input
              id="hospitalRadio"
              type="radio"
              name="role"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              className="ml-2"
              {...register("role")}
            />
            <label
              htmlFor="hospitalRadio"
              className="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Hospital
            </label>
          </div>{" "}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            {...register("email")}
            placeholder="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            for="password"
          >
            Passsword
          </label>
          <input
            {...register("password", { required: true })}
            placeholder="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="password"
          />
          <button
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
