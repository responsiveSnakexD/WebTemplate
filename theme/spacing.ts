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
  [SpacingGroup.Small]: {
    margin: 8,
    padding: 8,
  },
  [SpacingGroup.Medium]: {
    margin: 16,
    padding: 16,
  },
  [SpacingGroup.Large]: {
    margin: 24,
    padding: 24,
  },
};
