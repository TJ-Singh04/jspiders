import React from "react";

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-white text-center py-4 mt-auto mb-0">
      <p>&copy; {new Date().getFullYear()} JSpiders. All rights reserved.</p>
    </footer>
  );
}