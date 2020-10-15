interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "old civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `name: ${name}`;
  },
};

const coke = {
  name: "Coke",
  summary(): string {
    return `name: ${name}`;
  },
};

function printItem(item: Reportable) {
  console.log(item.summary());
}

printItem(oldCivic);
printItem(coke);
