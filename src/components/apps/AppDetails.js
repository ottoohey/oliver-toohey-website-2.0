import "../../Blogs.css";
import { useParams } from "react-router-dom";
import ContactMe from "../home/ContactMe";
import NOTD from "./applications/NOTD";

export default function BlogPost({ contactMeRef }) {
  let params = useParams();
  let appId = parseInt(params.appId);

  function DynamicPost(props) {
    const appId = props.appId;
    switch (appId) {
      case 1:
        return <NOTD />;
      //   case 2:
      //     return <PerfectPromptRecipe />;
      //   case 3:
      //     return <SecondBrain />;
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
      <DynamicPost appId={appId} />
      <ContactMe contactMeRef={contactMeRef} />
    </>
  );
}
