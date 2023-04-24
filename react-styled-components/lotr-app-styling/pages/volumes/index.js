import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Headline from "../../components/Headline";

export default function Volumes() {
  return (
    <>
      <Headline as="h1">The Lord of the Rings</Headline>
      <p>{introduction}</p>
      <Headline as="h2">All Volumes</Headline>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
