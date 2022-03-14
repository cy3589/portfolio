import { Dispatch, SetStateAction } from 'react';

export interface PortfolioProps {
  portfolioData: {
    with: '개인' | '팀';
    title: string;
    description: string;
    thumbnailUrl: string;
    dependencies?: { front: string[]; back?: string[] };
    images?: string[];
  };
}
export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
