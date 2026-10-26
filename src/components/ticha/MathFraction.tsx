import type { ReactNode } from 'react';

export default function MathFraction({ numerator, denominator, label }: {
  numerator: ReactNode;
  denominator: ReactNode;
  label: string;
}) {
  return (
    <span className="tc-math-fraction" role="math" aria-label={label}>
      <span aria-hidden="true">{numerator}</span>
      <span aria-hidden="true">{denominator}</span>
    </span>
  );
}
