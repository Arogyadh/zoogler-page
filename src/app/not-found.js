import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center my-10">
      <h2 className="text-4xl">There was a problem.</h2>
      <p>Page was not found .</p>
      <Link href={"/"}>
        <span className="font-bold text-[50px] mb-2 text-center bg-gradient-to-r from-[#63f37b] to-[#3F72AF] bg-clip-text text-transparent">
          Go Home &raquo;
        </span>
      </Link>
    </main>
  );
}
