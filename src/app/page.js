import Image from "next/image";
import Iframe from "react-iframe";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-between">
      {/* <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex"> */}
      <Iframe
        url="/assets/index.htm"
        width="100%"
        height="100%"
        id=""
        className=""
        display="block"
        position="relative"
        styles={{ height: "100%" }}
      />
      {/* </div> */}
    </main>
  );
}
