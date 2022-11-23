import React from 'react';

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right">Phimmoi.net</h4>
      </div>
    </nav>
  );
}

export default Nav;
