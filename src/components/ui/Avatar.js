"use client";

import { useState } from "react";

const Avatar = ({ src, name, initials, className = "" }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-ink font-display font-semibold text-paper ${className}`}
        role="img"
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={name} onError={() => setFailed(true)} className={`object-cover ${className}`} />;
};

export default Avatar;
