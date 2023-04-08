import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <div className="flex bg-zinc-800 h-screen">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">Blogs</h1>
        <h1 className="blog-subheading pb-16">Regularly Updated (Hopefully)</h1>
        <button className="text-yellow-100 p-4 text-2xl hover:font-bold">
          <Link to="/blogs/1">Blog #1 - Prompt Engineering</Link>
        </button>
        <button className="text-yellow-100 p-4 text-2xl hover:font-bold">
          <Link to="/blogs/2">Blog #2 - A Recipe for The Perfect Prompt</Link>
        </button>
        <button className="text-yellow-100 p-4 text-2xl hover:font-bold">
          <Link to="/blogs/3">Blog #3 - Second Brain</Link>
        </button>
      </div>
    </div>
  );
}
