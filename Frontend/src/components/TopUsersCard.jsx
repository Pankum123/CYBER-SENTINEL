import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import axios from "axios";

const iconMap = {
  facebook: <FaFacebook className="text-blue-600" />,
  instagram: <FaInstagram className="text-pink-500" />,
  twitter: <FaTwitter className="text-sky-500" />,
  youtube: <FaYoutube className="text-red-600" />,
};

export default function TopUsersCard({ keyword }) {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
   // const keyword = "climate";
    // if (!keyword) return;
    axios.get("/api/posts/top-users?keyword=tech").then((res) => {
      setTopUsers(res.data);
    });
  }, [keyword]);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-100 max-h-96 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-3 text-black">Top Users</h3>
      <ul className="space-y-3">
        {topUsers.map((user, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-800">
              {iconMap[user.platform?.toLowerCase()] || <span>❓</span>}
              <span>{user.name}</span>
            </div>
            <div className="text-sm text-gray-700">
              {user.followers?.toLocaleString()}
            </div>
            <button className="text-blue-600 text-sm font-medium hover:underline">
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
