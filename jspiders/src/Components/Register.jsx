import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosInstance } from "../Routes/axiosInstance";
import { toast } from "react-toastify";
const Register = () => {
  function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .filter(Boolean) // removes empty spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
  let navigate = useNavigate();
  let [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setFromData({
      ...formData,
      [name]: value,
    });
  };

  // let navigate = useNavigate();
  // const register = async (e) => {
  //   e.preventDefault();
  //   let resp = await AxiousInstance.post(`/users`, formData);
  //   console.log(resp);

  //   toast.success("SignUp Successfully");

  //   setFromData({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmpassword: "",
  // })
  // navigate("/login")

  // };
  const register = async (e) => {
    e.preventDefault();
    try {
      let response = await AxiosInstance.post("/auth/register", {
        name: capitalizeWords(formData.name),
        email: formData.email,
        password: formData.password,
      });
      let data = response.data.message;
      console.log(response.data.name);
      let authUser = await AxiosInstance.post("/auth/login",{
      email : formData.email,
      password : formData.password
    });
    console.log(authUser.data)
    if (authUser.data.token) {
      localStorage.setItem("token",authUser.data.token)
      localStorage.setItem("email",formData.email)
    }
      console.log(data);
      
      toast.success(data);
      setFromData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/studentDetails");

    } catch (error) {
      console.log("Error Occured");
      toast.error(response.data.message);

      console.log(error);
    }
  };

  return (
    <div className="h-[84.66vh] w-[100vw] flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl">Register Page</h1>
      <form className="min-h-[45vh] min-w-2/7 max-w-50 p-10 text-l flex justify-center items-center rounded-xl shadow-2xl">
        <table className="h-full w-full m-10">
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td className="px-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-[100%] py-1 border border-gray-300 rounded outline-0 p-1"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td className="px-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-[100%] py-1 border border-gray-300 rounded outline-0 p-1"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password">Password</label>
              </td>
              <td className="px-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-[100%] py-1 border border-gray-300 rounded outline-0 p-1"
                  value={formData.password}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* <tr>
              <td>
                <label htmlFor="confirmpassword">Confirm Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  className="w-[100%] py-1 border border-gray-300 rounded outline-0 p-1"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                />
              </td>
            </tr> */}

            <tr>
              <td colSpan={2}>
                <div className="flex items-center justify-center">
                  <button
                    onClick={register}
                    className="cursor-pointer hover:bg-orange-500 w-[100%] rounded text-center bg-orange-400 text-white px-4 py-2"
                  >
                    Register
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Register;
