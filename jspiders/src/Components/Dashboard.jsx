import React, { useContext, useEffect, useState } from "react";
// import { globalContext } from "../Routes/Context";
import { AxiosInstance } from "../Routes/axiosInstance";
import { toast } from "react-toastify";

const Dashboard = () => {
  let email = localStorage.getItem("email");
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState(null);
  let [user, setUser] = useState("");
  let getUser = async (email) => {
    try {
      let res = await AxiosInstance.get(`/users/email?email=${email}`);
      let data = await res.data;
      console.log(data);
      setUser(data);
      const resCourse = await AxiosInstance.get(`/courses`);
      setCourses(resCourse.data);
      console.log(resCourse.data);
    } catch (error) {
      toast.error(error);
    }
  };
  useEffect(() => {
    if (email && courses) {
      getUser(email);
    }
  }, []);
  useEffect(() => {
    if (user) {
      console.log("User ID has been updated:", user);
      // Now safely use userId for API calls, routing, etc.
    }
  }, [user]);

  return (
    <div className="bg-orange-50 rounded-2xl p-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        Welcome, {user.name}!
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Your Courses
        </h2>

        {courses.length === 0 ? (
          <p className="text-gray-600">No courses enrolled yet.</p>
        ) : (
          <ul className="space-y-4">
            {courses.map((course, idx) => (
              <div key={idx}>
                {(course.status = "completed")}
                <li
                  key={idx}
                  className={`flex items-center justify-between p-4 rounded-lg border 
                ${
                  course.status === "completed"
                    ? "border-green-400 bg-green-50"
                    : "border-yellow-400 bg-yellow-50"
                }`}
                >
                  <span className="text-lg font-medium text-gray-800">
                    {course.name}
                  </span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full 
                  ${
                    course.status === "completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                  >
                    {course.status}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
