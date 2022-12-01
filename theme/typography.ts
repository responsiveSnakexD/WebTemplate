export enum TypographyGroup {
  Heading1 = "heading1",
  Heading2 = "heading2",
  Paragraph = "paragraph",
}

export type Typography = {
  [key in TypographyGroup]: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
  };
};

export const typography: Typography = {
  [TypographyGroup.Paragraph]: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  [TypographyGroup.Heading1]: {
    fontFamily: "Roboto",
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
  },
  [TypographyGroup.Heading2]: {
    fontFamily: "Roboto",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
  },
};
