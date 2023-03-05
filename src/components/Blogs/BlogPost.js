import "../../Blogs.css";
import { useParams } from "react-router-dom";
import ContactMe from "../home/ContactMe";
import PromptEngineering from "./promptEngineering/PromptEngineering";
import PerfectPromptRecipe from "./promptEngineering/PerfectPromptRecipe";

export default function BlogPost({ contactMeRef }) {
  let params = useParams();
  let postId = parseInt(params.postId);

  function DynamicPost(props) {
    const postId = props.postId;
    switch (postId) {
      case 1:
        return <PromptEngineering />;
      case 2:
        return <PerfectPromptRecipe />;
      default:
        return (
          <div className="flex h-screen bg-zinc-800">
            <div className="grid grid-cols-1 h-10 m-auto">
              <h1 className="text-white">Hmmm, how did you get here?</h1>
              <button className="text-white hover:font-bold">
                Return home.
              </button>
            </div>
          </div>
        );
    }
  }

  return (
    <>
      <DynamicPost postId={postId} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
}
