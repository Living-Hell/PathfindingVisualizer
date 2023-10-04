import React from "react";

var Year = new Date().getFullYear();

export default function Foot() {
  return (
    <footer id="Footer">
      <p>Copyright (c) {Year}</p>
    </footer>
  );
}
