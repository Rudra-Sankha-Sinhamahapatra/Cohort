import { useEffect, useState } from "react";

export function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const val = setInterval(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => clearInterval(val);
  }, [value]);

  return debouncedValue;
}
