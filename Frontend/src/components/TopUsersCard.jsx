import { FaCheckCircle, FaFacebookF, FaInstagram, FaPlus } from "react-icons/fa";

const topUsers = [
  { name: "user1", followers: "751K", icon: <FaCheckCircle className="text-blue-600" /> },
  { name: "auser2", followers: "8,200", icon: <FaFacebookF className="text-blue-600" /> },
  { name: "auser3", followers: "22,500", icon: <FaInstagram className="text-pink-500" /> },
  { name: "auser4", followers: "6.100", icon: <FaPlus className="text-blue-600" /> },
];

export default function TopUsersCard() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-70">
      <h3 className="text-lg font-semibold mb-3 text-black">Top Users</h3>
      <ul className="space-y-3">
        {topUsers.map((user, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-800">
              {user.icon}
              <span>{user.name}</span>
            </div>
            <div className="text-sm text-gray-700">{user.followers}</div>
            <button className="text-blue-600 text-sm font-medium hover:underline">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
