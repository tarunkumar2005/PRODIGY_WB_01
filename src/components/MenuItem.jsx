import React from 'react';

export const MenuItem = ({ href, label }) => (
  <a
    href={href}
    className="text-white hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    {label}
  </a>
);