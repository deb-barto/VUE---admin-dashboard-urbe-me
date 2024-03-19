export const motionShake = {
  initial: {
    x: 0,
  },
  enter: {
    x: 10,
    transition: {
      duration: 1000,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
