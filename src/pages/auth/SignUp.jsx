import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const [role, setRole] = useState("donar");
  console.log(role);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register",
        data
      );
      console.log("ssssss", response);
      alert(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="mb-4 font-bold ">Welcome to Sign-up😊</h1>
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
            />
            <label
              htmlFor="hospitalRadio"
              className="ml-2 text-sm font-medium text-white dark:text-white"
            >
              Hospital
            </label>
          </div>

          {(role === "admin" || role === "donar") && (
            <>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Enter Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              />
            </>
          )}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
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
            htmlFor="password"
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="website"
          >
            Website
          </label>
          <input
            {...register("website", { required: true })}
            placeholder="website name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="text"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="address"
          >
            Address
          </label>
          <input
            {...register("address", { required: true })}
            placeholder="Address name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
          />
          {role === "organisation" && (
            <>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="organisationName"
              >
                organisationName
              </label>
              <input
                {...register("organisationName", { required: true })}
                placeholder="organisation Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="organisationName"
                type="text"
              />
            </>
          )}
          {role === "hospital" && (
            <>
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="hospitalName"
              >
                hospitalName
              </label>
              <input
                {...register("hospitalName", { required: true })}
                placeholder="hospital Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hospitalName"
                type="text"
              />
            </>
          )}

          <button
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
