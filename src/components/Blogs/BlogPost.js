import { useParams } from "react-router-dom";

export default function BlogPost() {
  let params = useParams();

  return (
    <>
      <div className="flex h-screen">
        <h1 className="m-auto">{params.postId}</h1>
      </div>
    </>
  );
}
