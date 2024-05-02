import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-900 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={150}
          height={150}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">BlogSolve</h1>
        </Link>
        <p className="text-slate-300">Welcome to your one stop destination to solve daily problems and upsolve data structures and algorithms. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by: </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ margin: 0 }}>Kanha Kesarwani: </p>
          <Link href="https://www.linkedin.com/in/kanha-kesarwani/" passHref>
            <Image
              src="/images/LI-In-Bug.png"
              width={20}
              height={20} // Ensure this is the aspect ratio you desire
              alt={"LinkedIn logo"}
              style={{ marginLeft: '5px', cursor: 'pointer' }}
            />
          </Link>
        </div>
        
      </div>
    </footer>
  );


  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
