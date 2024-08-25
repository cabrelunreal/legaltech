// components/FAQ.tsx
import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  questionsAnswers: FAQItem[];
};

const FAQ: React.FC<FAQProps> = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="md:w-9/12 w-full mx-auto p-5">
      <h2 className="md:text-2xl text-lg font-bold mb-8">Questions Fréquemment Posées</h2>
      <div className="space-y-4">
        {questionsAnswers.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 rounded-lg p-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center focus:outline-none"
            >
              <span className="md:text-lg text-sm font-medium text-left">{faq.question}</span>
              <span>
                {activeIndex === index ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-sm text-justify text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
