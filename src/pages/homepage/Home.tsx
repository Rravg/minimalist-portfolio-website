import { useEffect } from "react";

export default function Home(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Home";
  }, []);
  return <h1>Home</h1>;
}
