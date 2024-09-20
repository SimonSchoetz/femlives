import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & { condition: boolean };

const ConditionWrapper: React.FC<Readonly<Props>> = ({
  condition,
  children,
}) => {
  return condition ? <div>{children}</div> : null;
};

export default ConditionWrapper;
