import Header from "components/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <main>
        <Header />
      </main>
    </div>
  );
}
