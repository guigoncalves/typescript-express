const array = ["123", "1234", "teste"];

array.map((text, index): string => {
  return text + "oi";
});

const multipleTypeArray: (Date | string)[] = [new Date()];
