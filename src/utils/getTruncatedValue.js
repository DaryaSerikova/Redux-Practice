export const getTruncatedValue = (value) => {

  if (value !== null) {
      if (value.length > 42) {
          const newValue = value.substring(0, 42) + "...";
          return newValue;
        }
  } else {
      return value;
  }
}