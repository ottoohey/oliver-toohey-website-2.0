import { Link } from "react-router-dom";
export default function Apps() {
  return (
    <div className="flex bg-zinc-800 h-screen">
      <div className="pb-16 mx-auto container pt-3 px-6 max-w-screen-md">
        <h1 className="blog-heading">Apps</h1>
        <h1 className="blog-subheading pb-16">My creations...</h1>
        <button className="text-yellow-100 p-4 text-2xl hover:font-bold">
          <Link to="/apps/1">News Of The Dai</Link>
        </button>
      </div>
    </div>
  );
}
