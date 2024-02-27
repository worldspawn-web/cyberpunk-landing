import type { LearnMoreProps } from './LearnMore.interface';
import { LearnMoreButton, Wrapper } from './LearnMoreComponents';

export const LearnMore = ({ className, ...props }: LearnMoreProps) => {
  return (
    <Wrapper {...props} className={className}>
      <h2>Доступно на всех платформах</h2>
      <LearnMoreButton>Узнать больше</LearnMoreButton>
    </Wrapper>
  );
};
