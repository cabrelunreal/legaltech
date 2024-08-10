import React from 'react';

interface HeadsProps {
  title: string;
  description?: string;
  structure: string;
  cust?: string;
  headcust?: string;
}

const Heads: React.FC<HeadsProps> = ({ title, description, cust, headcust, structure }) => {
  return (
    <div className={structure}>
      <h2 className={`py-1 font-semibold text-lg md:text-xl ${headcust}`}>
        {title}
      </h2>
      {description && (
        <p className={`pb-1 text-sm md:text-sm ${cust}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Heads;
