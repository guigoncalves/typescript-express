const sum = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b: number): number {
  return a * b;
}

function logger(message: string): void {
  console.log(message);
}

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};
