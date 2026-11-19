import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { mockBingo } from '../../data/bingo';

const BingoFAQ = () => {
  const [openId, setOpenId] = useState(mockBingo.faqs[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <PageHeader
        title="Frequently Asked Bingo Questions"
        subtitle="Common questions about tickets, bonus withdrawals, and chat games"
        badgeText="BINGO FAQ"
      />

      <div className="d-flex flex-column gap-3">
        {mockBingo.faqs.map(faq => (
          <div key={faq.id} className="be-card p-0 overflow-hidden">
            <button
              type="button"
              className="w-100 p-3 bg-dark text-start border-0 d-flex justify-content-between align-items-center cursor-pointer"
              onClick={() => toggleAccordion(faq.id)}
            >
              <span className="fw-bold text-white fs-6">{faq.question}</span>
              <i className={`fa-solid ${openId === faq.id ? 'fa-chevron-up text-success' : 'fa-chevron-down text-muted'}`}></i>
            </button>
            {openId === faq.id && (
              <div className="p-3 bg-dark-subtle border-top border-secondary text-muted small">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoFAQ;
