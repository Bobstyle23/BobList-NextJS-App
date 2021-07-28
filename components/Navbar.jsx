import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link>
      <Link href="/ninjas/testing">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
