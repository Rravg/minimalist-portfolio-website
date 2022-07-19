import { useEffect } from "react";

export default function Detail(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Project Details";
  }, []);
  return <h1>Detail</h1>;
}
