import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { quotesOptions } from "../../lib/constant";
import useStore from "../../store";

export function Quotes() {
  const selectedQuote = useStore(state => state.selectedQuote);
  const setSelectedQuote = useStore(state => state.setSelectedQuote);

  const handleQuoteChange = (val) => {
    setSelectedQuote(val);
  };

  return (
    <div className="w-72">
      <Select
        label="Select Quote"
        value={selectedQuote ? selectedQuote : quotesOptions[0]}
        onChange={handleQuoteChange}
        style={{backgroundColor: 'white'}}
        labelProps={{ style: { color: '#2962ff', fontWeight: 'bold'}}}
        color="black"
      >
        {quotesOptions.map((quote, index) => (
          <Option key={index} value={quote}>{quote}</Option>
        ))}
      </Select>
    </div>
  );
}

