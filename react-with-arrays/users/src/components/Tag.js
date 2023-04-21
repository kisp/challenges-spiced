import "./Tag.css";

export default function Tag({ tag }) {
  // this can be made more DRY later
  if (tag === "admin") {
    return <li className="tag tag--highlight">{tag}</li>;
  } else {
    return <li className="tag">{tag}</li>;
  }
}
