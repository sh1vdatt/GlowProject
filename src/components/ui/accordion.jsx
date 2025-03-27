import {
  useState,
  Children,
  cloneElement,
  isValidElement,
  createContext,
  useContext,
} from "react";

// Create a context to manage accordion state
const AccordionContext = createContext(null);

export function Accordion({
  children,
  type = "single",
  collapsible = false,
  className = "",
}) {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    setOpenItems((prev) => {
      const newItems = new Set(prev);

      if (newItems.has(value)) {
        if (collapsible) {
          newItems.delete(value);
        }
      } else {
        if (type === "single") {
          newItems.clear();
        }
        newItems.add(value);
      }

      return newItems;
    });
  };

  // Create context value to be passed down
  const contextValue = { openItems, toggleItem };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value, className = "" }) {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems?.has(value);

  // Pass down isOpen and toggle function to children
  return (
    <div className={`border-b ${className}`}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        // Pass props to children
        return cloneElement(child, {
          isOpen,
          onToggle: () => toggleItem(value),
        });
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className = "",
  isOpen,
  onToggle,
}) {
  return (
    <button
      className={`flex justify-between w-full py-4 text-left ${className}`}
      onClick={onToggle}
    >
      {children}
      <span className={`text-2xl font-medium transition-transform`}>
        {isOpen ? "−" : "+"}
      </span>
    </button>
  );
}

export function AccordionContent({ children, className = "", isOpen }) {
  if (!isOpen) return null;

  return <div className={`py-4 ${className}`}>{children}</div>;
}
