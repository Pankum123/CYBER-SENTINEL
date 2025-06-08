import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaReddit } from "react-icons/fa";

const PlatformFilter = () => {
  return (
    <div className=" grid grid-cols-3 items-center gap-6 flex-wrap mt-4">
      <label className="flex items-center gap-2">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-primary" />
        <FaFacebook className="text-blue-600 " />
        <span>Facebook</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-primary" />
        <FaTwitter className="text-sky-500" />
        <span>Twitter</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-primary" />
        <FaInstagram className="text-pink-500" />
        <span>Instagram</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-primary" />
        <FaYoutube className="text-red-600" />
        <span>YouTube</span>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox"  className="checkbox checkbox-sm checkbox-primary" />
        <FaReddit className="text-orange-500" />
        <span>Reddit</span>
      </label>
    </div>
  );
};

export default PlatformFilter;
