
import React from 'react';

export interface IconProps {
  className?: string;
}

export interface RitualStep {
  id: number;
  title: string;
  description: string;
  Icon: React.FC<IconProps>;
}
