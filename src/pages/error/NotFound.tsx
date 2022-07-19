import { useEffect } from "react";

export default function NotFound(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Error";
  }, []);
  return <h1>404 Page Not Found </h1>;
}
