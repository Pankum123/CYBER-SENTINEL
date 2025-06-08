import { useEffect, useState } from "react";
import axios from "axios";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useKeyword } from "../context/KeywordProvider";

const iconMap = {
  Facebook: <FaFacebook className="text-blue-600" />,
  Twitter: <FaTwitter className="text-sky-500" />,
  Instagram: <FaInstagram className="text-pink-500" />,
  YouTube: <FaYoutube className="text-red-600" />,
};

export default function PlatformStatsTable() {
  const [keyword] = useKeyword();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!keyword) return;
    axios
      .get(`api/posts/platform-stats?keyword=${keyword}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching platform stats:", err));
  }, [keyword]);

  return (
    <div className="p-4 bg-white rounded-xl md:w-237  shadow-md overflow-x-auto ">
      <h3 className="text-lg font-semibold mb-3 text-black">Posts by Platform</h3>
      <table className="md:min-w-full text-sm text-left ">
        <thead className="border-b text-gray-700">
          <tr>
            <th className="px-4 py-2 font-semibold">Platform</th>
            <th className="px-4 py-2 font-semibold">Posts</th>
            <th className="px-4 py-2 font-semibold">Top Region</th>
            <th className="px-4 py-2 font-semibold">First Post</th>
            <th className="px-4 py-2 font-semibold">First Post Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-100 transition">
              <td className="px-4 py-2 flex items-center gap-2 text-gray-800">
                {iconMap[row.platform] || "🟡"} {row.platform}
              </td>
              <td className="px-4 py-2 text-black">{row.posts}</td>
              <td className="px-4 py-2 text-black">{row.region}</td>
              <td className="px-4 py-2 text-black">{row.date}</td>
              <td className="px-4 py-2 text-blue-600 hover:underline cursor-pointer">
                <a href={row.link} target="_blank" rel="noopener noreferrer">View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

