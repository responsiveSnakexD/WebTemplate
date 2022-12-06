export enum ColorType {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Error = "error",
  Background = "background",
}

export type Colors = {
  [key in ColorType]: {
    text: string;
    background: string;
  };
};

export const light: Colors = {
  [ColorType.Primary]: {
    text: "#E75A7C",
    background: "#BBC7A4",
  },
  [ColorType.Secondary]: {
    text: "#2C363F",
    background: "#D6DBD2",
  },
  [ColorType.Accent]: {
    text: "#E75A7C",
    background: "#BBC7A4",
  },
  [ColorType.Error]: {
    text: "#2C363F",
    background: "#E75A7C",
  },
  [ColorType.Background]: {
    text: "#E75A7C",
    background: "#F2F5EA",
  },
};

export const dark: Colors = {
  [ColorType.Primary]: {
    text: "#ffffff",
    background: "#000000",
  },
  [ColorType.Secondary]: {
    text: "#ffffff",
    background: "#000000",
  },
  [ColorType.Accent]: {
    text: "#ffffff",
    background: "#000000",
  },
  [ColorType.Error]: {
    text: "#ffffff",
    background: "#000000",
  },
  [ColorType.Background]: {
    text: "#ffffff",
    background: "#F2F5EA",
  },
};
