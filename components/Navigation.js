import Link from "next/link";
const Navigation = () => {
  return (
    <nav>
      <div>
        <Link href="/" passHref>
          <a> Home </a>
        </Link>
        <Link href="/channels" passHref>
          <a> Channels </a>
        </Link>
        <Link href="/categories" passHref>
          <a> Categories</a>
        </Link>
        <Link href="/programs" passHref>
          <a> Programs</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
