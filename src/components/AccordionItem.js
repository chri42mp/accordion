import React from "react";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{question}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
