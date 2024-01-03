export const local = (key, value) => {
    if (value !== undefined) {
      localStorage.setItem(key, value);
    } else {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? storedValue : null;
    }
  };
  