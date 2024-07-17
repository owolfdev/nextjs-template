"use client";
import React from "react";

interface InlineCodeProps {
  children: React.ReactNode;
}

const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return (
    <code className="bg-gray-200 text-gray-900 px-2 py-1 rounded text-base">
      {children}
    </code>
  );
};

export default InlineCode;
