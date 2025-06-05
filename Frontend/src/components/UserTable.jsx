import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useKeyword } from "../context/KeywordProvider";

export default function UserTable() {
  const [keyword] = useKeyword();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!keyword) return;
    axios
      .get(`/api/posts?keyword=${keyword}`) // adjust keyword dynamically if needed
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, [keyword]);

  return (
    <div className="overflow-x-auto rounded-lg shadow-md h-75 overflow-y-auto">
      <table className="min-w-full bg-white text-sm">
        <thead className="text-left text-gray-700 font-semibold border-b">
          <tr>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Posts</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Followers</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Post Link</th>
            <th className="px-4 py-3">Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 flex items-center gap-2 text-black">
                {/* Show icon based on platform */}
                {user.platform === "Facebook" && <FaFacebook className="text-blue-600" />}
                {user.platform === "Instagram" && <FaInstagram className="text-pink-500" />}
                {user.platform === "Twitter" && <FaTwitter className="text-sky-500" />}
                {user.platform === "YouTube" && <FaYoutube className="text-red-600" />}
                {user.name}
              </td>
              <td className="px-4 py-2 text-black">{user.posts}</td>
              <td className="px-4 py-2 text-black">{new Date(user.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 text-black">{user.followers}</td>
              <td className="px-4 py-2 text-black">{user.location}</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                <a href={user.postLink} target="_blank" rel="noopener noreferrer">View</a>
              </td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                <a href={user.profileLink} target="_blank" rel="noopener noreferrer">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


