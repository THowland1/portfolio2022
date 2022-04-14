// Lovingly copied from react-type-animation

import React, { useRef, useEffect, memo } from 'react';
import { type, type as typeLoop } from './type';

const TypeAnimation = ({ sequence = [] as any[], repeat = Infinity }) => {
  const typeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!typeRef.current) {
      return;
    }
    if (repeat === Infinity) {
      type(typeRef.current, ...sequence, typeLoop);
    } else if (typeof repeat === 'number') {
      type(typeRef.current, ...Array(repeat).fill(sequence).flat());
    } else {
      type(typeRef.current, ...sequence);
    }
  });

  return <span ref={typeRef} />;
};

export default memo(TypeAnimation);
