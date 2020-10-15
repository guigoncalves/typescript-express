const profile = {
  name: "Guigo",
  age: 25,
  coords: {
    x: 10,
    y: 15,
  },
};

const { age, coords }: { age: number; coords: { x: number; y: number } } =
  profile;
