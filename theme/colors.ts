export enum ColorType {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Error = "error",
}

type Colors = {
  [key in ColorType]: {
    text: string;
    background: string;
  };
};

export const light: Colors = {
  primary: {
    text: "#000000",
    background: "#ffffff",
  },
  secondary: {
    text: "#000000",
    background: "#ffffff",
  },
  accent: {
    text: "#000000",
    background: "#ffffff",
  },
  error: {
    text: "#000000",
    background: "#ffffff",
  },
};

export const dark: Colors = {
  primary: {
    text: "#ffffff",
    background: "#000000",
  },
  secondary: {
    text: "#ffffff",
    background: "#000000",
  },
  accent: {
    text: "#ffffff",
    background: "#000000",
  },
  error: {
    text: "#ffffff",
    background: "#000000",
  },
};
