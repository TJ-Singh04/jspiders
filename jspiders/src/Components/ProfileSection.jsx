import React, { useEffect, useState } from "react";
import { AxiosInstance } from "../Routes/axiosInstance";

export default function ProfileSection() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState(null);
  const [courseName, setCourseName] = useState(null);

  const email = localStorage.getItem("email"); // assuming email stored on login

  const fetchProfile = async () => {
    try {
      // Get user by email
      const resUser = await AxiosInstance.get(`/users/email?email=${email}`);
      setUser(resUser.data);

      // Get student profile
      const resProfile = await AxiosInstance.get(
        `/profiles/user/${resUser.data.id}`
      );
      setProfile(resProfile.data);
      // Get Course by email
      const resCourse = await AxiosInstance.get(`/courses`);
      setCourses(resCourse.data);
      console.log(resCourse.data);
    } catch (error) {
      console.error("Failed to fetch profile", error);
    }
    // Get Course by email
    const resCourse = await AxiosInstance.get(`/courses`);
    setCourses(resCourse.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  useEffect(() => {
    if (courses) {
      console.log(profile);
      courses.map((item) => {
        let { students } = item;
        students.find((ele) => {
          if (profile.id == ele.id) {
            console.log(item.id);
            setCourseName(item.name);
          }
        });
      });
    }
  }, [courses]);
  // console.log(courseName);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Profile Information
        </h2>
          
        {!user || !profile ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div>
              <p className="font-semibold">Name:</p>
              <p>{user.name}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{user.email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>{profile.phone}</p>
            </div>
            <div>
              <p className="font-semibold">Branch:</p>
              <p>{profile.branch}</p>
            </div>
            <div>
              <p className="font-semibold">Qualification:</p>
              <p>{profile.qualification}</p>
            </div>
            <div>
              <p className="font-semibold">Course:</p>
              <p>{courseName}</p>
            </div>
            <div>
              <p className="font-semibold">Role:</p>
              <p>{`${user.role.slice(0,1).toUpperCase()}${user.role.slice(1,)}`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
