import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AxiosInstance } from '../Routes/axiosInstance';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
    let navigate = useNavigate()
  const [formData, setFormData] = useState({
      phone: "",
      qualification: "",
      branch: "",
      enrolledCourseId: "",
    });
    let email = localStorage.getItem("email")
    console.log(email);
    
    let [user,setUser] = useState("")
      let getUser = async (email)=>{
      let res = await AxiosInstance.get(`/users/email?email=${email}`)
      let data = await res.data
      console.log(data);
      setUser(data)
    }
    useEffect(()=>{
      getUser(email)
    },[email])
    const handleChange = (e) => {
      let { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const updateProfile = async (e) => {
      e.preventDefault();
      try {
        let res = await AxiosInstance.post(`/profiles`, {
          phone: formData.phone,
          qualification: formData.qualification,
          branch: formData.branch,
          enrolledCourse: {
            id: formData.enrolledCourseId,
          },
          user: {
            id: user.id
          }
        });
        
        
        toast.success("Profile Updated");
        navigate("/dashboard")
        window.location.reload();
      } catch (error) {
        toast.error("Update Failed");
        console.error(error);
      }
    };
  
    return (
      <div className="h-[84.66vh] w-[100vw] flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-3xl">Student Profile</h1>
        <form className="min-h-[45vh] min-w-2/7 max-w-50 p-10 text-l flex justify-center items-center rounded-xl shadow-2xl">
          <table className="h-full w-full m-10">
            <tbody>
              <tr>
                <td><label htmlFor="phone">Phone</label></td>
                <td className="px-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full py-1 border border-gray-300 rounded outline-0 p-1"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </td>
              </tr>
  
              <tr>
                <td><label htmlFor="qualification">Qualification</label></td>
                <td className="px-2">
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    className="w-full py-1 border border-gray-300 rounded outline-0 p-1"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </td>
              </tr>
  
              <tr>
                <td><label htmlFor="branch">Branch</label></td>
                <td className="px-2">
                  <input
                    type="text"
                    name="branch"
                    id="branch"
                    className="w-full py-1 border border-gray-300 rounded outline-0 p-1"
                    value={formData.branch}
                    onChange={handleChange}
                  />
                </td>
              </tr>
  
              <tr>
                <td><label htmlFor="enrolledCourseId">Course ID</label></td>
                <td className="px-2">
                  <input
                    type="text"
                    name="enrolledCourseId"
                    id="enrolledCourseId"
                    className="w-full py-1 border border-gray-300 rounded outline-0 p-1"
                    value={formData.enrolledCourseId}
                    onChange={handleChange}
                  />
                </td>
              </tr>
                <tr>
                <td></td>
                <td className="px-2">
                    <p>1. Java Full Stack <br />2. Web technologies <br /> 3. SQL</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="flex items-center justify-center">
                    <button
                      onClick={updateProfile}
                      className="w-[100%] rounded text-center bg-orange-400 text-white px-4 py-2"
                    >
                      Enter Details
                    </button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </form>
      </div>
    );
}

export default StudentDetails
