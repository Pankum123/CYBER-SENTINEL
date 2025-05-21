import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const data = [
  { platform: "Facebook", posts: 210, date: "04/14/2024", region: "Illinois", icon: <FaFacebook className="text-blue-600" /> },
  { platform: "Twitter", posts: 160, date: "04/14/2024", region: "California", icon: <FaTwitter className="text-blue-500" /> },
  { platform: "Instagram", posts: 155, date: "04/15/2024", region: "New York", icon: <FaInstagram className="text-pink-500" /> },
  { platform: "YouTube", posts: 95, date: "04/15/2024", region: "Texas", icon: <FaYoutube className="text-red-600" /> },
];

export default function PostsTable() {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md w-265">
      <table className="min-w-full text-sm text-left">
        <thead className="border-b text-gray-700">
          <tr>
            <th className="px-4 py-2 font-semibold">Posts-by Platform</th>
            <th className="px-4 py-2 font-semibold">Posts</th>
            <th className="px-4 py-2 font-semibold">First Post</th>
            <th className="px-4 py-2 font-semibold">Top Region</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-100 transition">
              <td className="px-4 py-2 flex items-center gap-2 font-medium text-gray-800">
                {row.icon} {row.platform}
              </td>
              <td className="px-4 py-2 text-black">{row.posts}</td>
              <td className="px-4 py-2 text-black">{row.date}</td>
              <td className="px-4 py-2 text-black">{row.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
