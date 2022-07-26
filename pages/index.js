import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Discover from "./discover";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <main>Nothing in heres</main>
      <Link href="/discover">Amazing</Link>
    </div>
  );
}
