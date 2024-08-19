import  {  useState } from 'react';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Explore Common <span className='text-blue-500'>Questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 rounded-2xl"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-0' : 'transform rotate-180'
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-blue-500">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <span className="cursor-pointer text-blue-500 font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline"><Link to="/contact">
            Contact our support</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: 'How can I get started?',
    answer: "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup."
  },
  {
    question: 'What is the pricing structure?',
    answer: 'Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.'
  }
];

export default FAQSection;
