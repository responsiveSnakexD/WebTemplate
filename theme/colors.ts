export enum ColorType {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Error = "error",
}

export type Colors = {
  [key in ColorType]: {
    text: string;
    background: string;
  };
};

export const light: Colors = {
  [ColorType.Primary]: {
    text: "#000000",
    background: "#ffffff",
  },
  [ColorType.Secondary]: {
    text: "#000000",
    background: "#ffffff",
  },
  [ColorType.Accent]: {
    text: "#000000",
    background: "#ffffff",
  },
  [ColorType.Error]: {
    text: "#000000",
    background: "#ffffff",
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
};
