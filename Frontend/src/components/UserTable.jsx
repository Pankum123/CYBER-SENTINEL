import { FaTwitter } from "react-icons/fa";

const users = [
  {
    name: "user1",
    platform: "Twitter",
    posts: 30,
    followers: "13.000",
    location: "California",
  },
  {
    name: "user2",
    platform: "Twitter",
    posts: 45,
    followers: "8.500",
    location: "Texas",
  },
  {
    name: "user3",
    platform: "Twitter",
    posts: 50,
    followers: "20.000",
    location: "New York",
  },
];

export default function UserTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-white text-sm">
        <thead className="text-left text-gray-700 font-semibold border-b">
          <tr>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Platform</th>
            <th className="px-4 py-3">Posts</th>
            <th className="px-4 py-3">Followers</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Post Link</th>
            <th className="px-4 py-3">Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 flex items-center gap-2">
                <FaTwitter className="text-blue-500" />
                {user.name}
              </td>
              <td className="px-4 py-2 text-black">{user.platform}</td>
              <td className="px-4 py-2 text-black">{user.posts}</td>
              <td className="px-4 py-2 text-black">{user.followers}</td>
              <td className="px-4 py-2 text-black">{user.location}</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">View</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">View</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
