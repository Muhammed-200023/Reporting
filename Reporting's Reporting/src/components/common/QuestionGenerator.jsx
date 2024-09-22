export const QuestionGenerator = (text, inputFields, questionId, handleInputChange, pillarName, ReportForm) => {
  const textParts = text.split(/(<[^>]+>)/g).map((part, index) => {
    const matchedField = inputFields.find((field) => `<${field.inputId}>` === part);
    if (matchedField) {
      const { inputId, inputType, options } = matchedField;
      const key = `${questionId}-${inputId}-${index}`;
      const value = ReportForm?.[pillarName]?.[questionId]?.inputFields?.[inputId] || '';
    
      if (inputType === 'number') {
        return (
          <input
            type="number"
            key={key}
            value={value}  
            className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          />
        );
      } else if (inputType === "text") {
        return (
          <input
            type="text"
            key={key}
            value={value}
            className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          />
        );
      } else if (inputType === 'dropdown') {
        return (
          <select
            key={key}
            value={value}  
            className="text-center w-[150px] h-[28px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          >
            <option disabled selected hidden></option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      }
    } else {
      return part;
    }
  });

  return <span>{textParts}</span>;
};

