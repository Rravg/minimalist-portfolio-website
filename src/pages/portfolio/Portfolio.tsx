import { useEffect } from "react";

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | My Projects";
  }, []);
  return <h1>Portfolio</h1>;
}
