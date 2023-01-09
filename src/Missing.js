import React from "react";
import { Link } from "react-router-dom";

function Missing() {
  return (
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Well, that's desappointing</p>
      <p>
        <Link to="/">Visit our home page</Link>
      </p>
    </main>
  );
}

export default Missing;
