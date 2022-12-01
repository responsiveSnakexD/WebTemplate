type Typography = {
  [key: string]: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
  };
};

export const typography: Typography = {
  paragraph: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  heading1: {
    fontFamily: "Roboto",
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
  },
  heading2: {
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
  },
};
