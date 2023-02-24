import MorphingShape from "./MorphingShape.js";
import ShapeDescriptions from "./ShapeDescriptions";

export default function ScrollingView({ titleRef }) {
  return (
    <div className="flex pt-32 bg-zinc-800">
      <MorphingShape />
      <ShapeDescriptions titleRef={titleRef} />
    </div>
  );
}
