import { Dispatch, SetStateAction } from 'react';

export interface PortfolioData {
  with: '개인' | '팀';
  title: string;
  description: string;
  thumbnailUrl: string;
  dependencies?: { front: string[]; back?: string[] };
  images?: string[];
  detailedDescription: string;
  whatILearned: string[];
  isDeploy: boolean;
  deployLink?: string;
}

export interface PortfolioProps {
  portfolioData: PortfolioData;
}

export interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}
