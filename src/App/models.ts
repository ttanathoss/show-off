import { FC } from 'react';

export interface AppsObject {
  name: string;
  description: string;
  render: FC;
}

export interface ItemProps extends AppsObject {
  setItem: () => void;
  isActive: boolean;
}
