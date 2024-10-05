import Image from "next/image";
import { Button } from "../ui/button";
import GitHubLink from "./github-link";

export const NavBar = () => (
  <nav className="flex justify-between items-center p-4 bg-black text-white transition-all duration-300 ease-in-out">
    <a href="/">
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">MultiVec</div>
        <Image src="/ostrich.png" alt="Ostrich Logo" width={30} height={30} />
      </div>
    </a>{" "}
    <div className="flex space-x-4">
      <a href="/features">
        <Button variant="ghost">Features</Button>
      </a>
      <a href="/docs">
        <Button variant="ghost">Docs</Button>
      </a>
      <a href="/about">
        <Button variant="ghost">About</Button>
      </a>
      <GitHubLink repo="multivec/multivec" />
      <a href="/docs">
        <Button variant="outline" className="bg-transparent">
          Get Started
        </Button>
      </a>
    </div>
  </nav>
);
