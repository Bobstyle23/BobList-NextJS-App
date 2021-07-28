import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello Next</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolorum
        dicta fuga atque sit odit provident necessitatibus mollitia error, ipsum
        vitae iure, cumque molestias pariatur explicabo eligendi libero numquam
        corporis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dolorum
        dicta fuga atque sit odit provident necessitatibus mollitia error, ipsum
        vitae iure, cumque molestias pariatur explicabo eligendi libero numquam
        corporis.
      </p>
      <Link href="/ninjas/testing">
        <a>See all ninjas</a>
      </Link>
      <Footer />
    </div>
  );
}
