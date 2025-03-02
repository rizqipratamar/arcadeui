import React, { useState } from "react";

export interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen: controlledIsOpen,
  onChange,
  className = "",
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const toggleAccordion = () => {
    if (isControlled) {
      onChange?.(!isOpen);
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div className={`border-4 border-pixel-darkGray mb-2 ${className}`}>
      <button
        className="w-full px-4 py-3 font-pixel text-left bg-pixel-lightGray hover:bg-pixel-gray/20 transition-colors flex justify-between items-center"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <div className="w-5 h-5 flex items-center justify-center font-pixel text-xl text-pixel-darkGray">
          {isOpen ? '-' : '+'}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-4 font-retro">{children}</div>
      </div>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultIndex?: number | number[];
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  allowMultiple = false,
  defaultIndex,
  className = "",
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
    if (defaultIndex === undefined) return [];
    return Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex];
  });

  const handleItemChange = (index: number, isOpen: boolean) => {
    if (isOpen) {
      if (allowMultiple) {
        setOpenIndexes([...openIndexes, index]);
      } else {
        setOpenIndexes([index]);
      }
    } else {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    }
  };

  // Clone children with additional props
  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    // Type assertion to tell TypeScript this is an AccordionItem
    return React.cloneElement(child, {
      isOpen: openIndexes.includes(index),
      onChange: (isOpen: boolean) => handleItemChange(index, isOpen),
    } as Partial<AccordionItemProps>);
  });

  return <div className={`font-retro ${className}`}>{items}</div>;
};

export default Accordion;
