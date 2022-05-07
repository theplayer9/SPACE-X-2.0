import Link from "next/link";

export default function firstpost() {
  return (
    <>
      <h1> This is my first code in Next.js</h1>
      <h2>
        {" "}
        <Link href="/">
          <a> Back to home </a>
        </Link>
      </h2>
    </>
  );
}
