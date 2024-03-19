import Link from "next/link";
import Image from "next/image";


export default function TopBar() {
  return (
    <nav className="topBar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
    </nav>
  );
}
