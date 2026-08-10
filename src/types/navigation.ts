import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  label: string;
  icon: LucideIcon;
  tone: 'blue' | 'cyan' | 'green' | 'amber';
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
  badge: string;
}
