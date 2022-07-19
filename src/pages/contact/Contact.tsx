import { useEffect } from "react";

export default function Contact(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | Contact Me";
  }, []);
  return <h1>Contact Me</h1>;
}
