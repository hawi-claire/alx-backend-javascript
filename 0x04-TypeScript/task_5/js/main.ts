// Define MajorCredits interface with a brand for unique identification
export interface MajorCredits {
  credits: number;
  // Using branding to create a type that TypeScript treats as unique
  readonly _majorBrand: unique symbol;
}

// Define MinorCredits interface with a brand for unique identification
export interface MinorCredits {
  credits: number;
  // Using branding to create a type that TypeScript treats as unique
  readonly _minorBrand: unique symbol;
}

/**
 * Sum up major credits from two subjects
 * @param subject1 First major subject
 * @param subject2 Second major subject
 * @returns Total major credits
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

/**
 * Sum up minor credits from two subjects
 * @param subject1 First minor subject
 * @param subject2 Second minor subject
 * @returns Total minor credits
 */
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}
