export enum SpacingGroup {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export type Spacing = {
  [key in SpacingGroup]: {
    margin: number;
    padding: number;
  };
};

export const spacing: Spacing = {
  small: {
    margin: 8,
    padding: 8,
  },
  medium: {
    margin: 16,
    padding: 16,
  },
  large: {
    margin: 24,
    padding: 24,
  },
};
