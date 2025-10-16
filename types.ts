
export type IconName = 'Users' | 'TrendingUp' | 'Zap' | 'DollarSign' | 'Target' | 'CheckCircle';

export interface Experiment {
  title: string;
  cost: string;
  duration: string;
  details: string[];
  successCriteria: string;
}

export interface Decision {
  week: number;
  validated: string;
  partial: string;
  invalidated: string;
}

export interface Hypothesis {
  id: string;
  title: string;
  color: string;
  hexColor: string;
  icon: IconName;
  hypothesis: string;
  initialConfidence: number;
  criticality: string;
  decisionPoint: number;
  failureCheckpoints: string;
  experiments: Experiment[];
  decisionOutcomes: Decision;
}
