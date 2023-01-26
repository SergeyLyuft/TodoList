import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>With love by Sergey Lyuft ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
