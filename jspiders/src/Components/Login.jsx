import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../Routes/axiosInstance';
import { toast } from 'react-toastify';
// import Context, { globalContext } from '../Routes/Context';
import { Proportions } from 'lucide-react';

const LoginPage = () => {
  let [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };
  let navigate = useNavigate();
  

  const login = async (e) => {
    // let allUsers = useApi(`/users/${formData.email}`);
    // console.log(allUsers);
    e.preventDefault();
    let authUser = await AxiosInstance.post("/auth/login",{
      email : formData.email,
      password : formData.password
    });
    console.log(authUser.data)
    if (authUser.data.token) {
      toast.success("Login Successfully");
      navigate("/dashboard")
      localStorage.setItem("token",authUser.data.token)
      localStorage.setItem("email",formData.email)
      window.location.reload()
    }
    else{
      toast.error("Invalid Credentials");

    }
  };

  return (
    <div className="h-[84.66vh] w-[100vw] flex flex-col items-center justify-center gap-5">
      <h1 className="font-bold text-3xl">Login Page</h1>
      <form className="min-h-[45vh] min-w-2/7 p-10 text-l flex justify-center items-center rounded-xl shadow-2xl">
        <table className="h-[90%] w-full m-10">
          <tbody>
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td className='px-2'>
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
              <td className='px-2'>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-[100%] py-1 border border-gray-300 rounded outline-0 p-1 "
                  value={formData.password}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <div className="flex items-center justify-center">
                  <button
                    onClick={login}
                    className="cursor-pointer hover:bg-orange-500 w-[100%] rounded text-center bg-orange-400 text-white px-4 py-2"
                  >
                    Login
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

export default LoginPage;
