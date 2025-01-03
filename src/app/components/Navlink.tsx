import '../style/navlink.css'
import Link from 'next/link';
import React from 'react';

interface links {
  href: string;
  title: string;
}

const Navlink: React.FC<links> = ({ href, title }) => {
  return (
    <div>
      <Link href={href} className="navlink">
        {title}
      </Link>
    </div>
  );
}

export default Navlink;