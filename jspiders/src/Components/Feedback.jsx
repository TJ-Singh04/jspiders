import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { AxiosInstance } from "../Routes/axiosInstance";

export default function Feedback() {
  let email = localStorage.getItem("email");
  let [user, setUser] = useState("");
  let getUser = async (email) => {
    let res = await AxiosInstance.get(`/users/email?email=${email}`);
    let data = await res.data;
    console.log(data);
    setUser(data);
  };
  let getFeedbacks = async () => {
    let res2 = await AxiosInstance.get(`/profiles/user/${user.id}`);
    console.log(res2.data);
    let res3 = await AxiosInstance.get(`/feedbacks/student/${res2.data.id}`);
    console.log(res3.data);
    setHistory(res3.data);
  };
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getUser(email);
  }, []);

  useEffect(() => {
    if (user && user.id) {
      getFeedbacks();
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() && rating) {
      // setHistory([
      //   {
      //     text: feedback,
      //     rating: rating,
      //     date: new Date().toLocaleString(),
      //   },
      //   ...history,
      // ]);
      // setFeedback("");
      // setRating("");

      let res = await AxiosInstance.post(`/feedbacks/student/${user.id}`, {
        description: feedback,
        rating: rating,
      });
      console.log(res);
      getFeedbacks();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br flex flex-col items-center from-orange-300 to-yellow-200 text-gray-900 px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Feedback Page</h1>

      <form
        onSubmit={handleSubmit}
        className="min-h-[50%] w-[70%] max-w-2xl mx-auto bg-white p-6 rounded shadow-md"
      >
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          className="h-[60%] w-full border border-gray-300 p-3 rounded mb-4 resize-none focus:outline-none"
        ></textarea>

        <label htmlFor="rating" className="block mb-1 font-semibold">
          Rating (1 to 10):
        </label>
        <input
          id="rating"
          type="number"
          max={5}
          min={1}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter Rating between 1 to 10."
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded outline-none"
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
        >
          Submit Feedback
        </button>
      </form>

      <div className="max-w-xl mx-auto mt-10 w-full">
        <h2 className="text-2xl font-semibold mb-4">Feedback History</h2>
        {history.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          <ul className="space-y-4">
            {history.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded shadow">
                <p className="mb-1">{item.description}</p>
                <p className="text-sm text-gray-700 font-medium">
                  Rating: {item.rating}/10
                </p>
                <span className="text-sm text-gray-500">
                  Submitted on{" "}
                  {`${item.createdAt.slice(0, 10)} ${item.createdAt.slice(
                    11,
                    19
                  )}`}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
