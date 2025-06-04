import { FaFacebook, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";

// const users = [
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
//   { name: "user1", posts: 90, date: "04/14/2024",  followers: "18.000", location: "Bihar", icon: <FaFacebook className="text-blue-600" /> },
//   { name: "user2", posts: 70, date: "04/14/2024",  followers: "12.000", location: "UP", icon: <FaInstagram className="text-pink-500" />},
//   { name: "user3", posts: 40, date: "04/14/2024",  followers: "50.000", location: "Rajsthan", icon: <FaTwitter className="text-sky-500" />  },
//   { name: "user4", posts: 20, date: "04/14/2024",  followers: "19.000", location: "California", icon: <FaYoutube className="text-red-600" /> },
 
 
// ];

export default function UserTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/posts?keyword=tech") // adjust keyword dynamically if needed
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

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


