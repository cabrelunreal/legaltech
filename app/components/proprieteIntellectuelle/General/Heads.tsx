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
      <h2 className={`py-2 font-semibold text-2xl md:text-3xl ${headcust}`}>
        {title}
      </h2>
      {description && (
        <p className={`pb-4 text-base md:text-lg ${cust}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Heads;
