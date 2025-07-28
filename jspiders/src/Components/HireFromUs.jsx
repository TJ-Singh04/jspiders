import React, { useState } from 'react'

const HireFromUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add API call or email trigger logic here
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
          Hire From Us
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-10">
          Looking for skilled and job-ready candidates? We provide well-trained software engineers with hands-on experience in modern technologies.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
          <h2 className="text-xl font-semibold mb-2 text-orange-500">Trained Talent</h2>
          <p className="text-gray-600">
            Candidates trained in Java, Python, MERN, React, Data Structures, and more — industry-ready from day one.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
          <h2 className="text-xl font-semibold mb-2 text-orange-500">Screened Profiles</h2>
          <p className="text-gray-600">
            All candidates go through aptitude, technical, and communication evaluations to ensure quality.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-400">
          <h2 className="text-xl font-semibold mb-2 text-orange-500">Zero Hiring Cost</h2>
          <p className="text-gray-600">
            Our services are free for companies. No commission, no obligation — just great talent.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Interested in hiring?</h3>
        <p className="text-gray-700 mb-6">
          Fill out the form below and we’ll connect you with top candidates.
        </p>
        <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-2xl border border-orange-400">
      <form onSubmit={handleSubmit}>
        <table className="w-full text-left">
          <tbody>
            <tr>
              <td colSpan="2" className="pb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="pb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                  required
                />
              </td>
            </tr>

            <tr>
              <td className="w-1/5 pr-2 align-middle">
                <div className="flex items-center">
                  <img
                    src="https://flagcdn.com/w40/in.png"
                    alt="India"
                    className="w-5 h-5 mr-1"
                  />
                  <span className="text-gray-700">+91</span>
                </div>
              </td>
              <td className="pb-3 w-full">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="pb-3">
                <input
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" className="pb-3">
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none resize-none"
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
                >
                  Send Request
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>

      </div>
    </div>
  );
}


export default HireFromUs;
