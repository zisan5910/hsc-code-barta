
export interface CheatCode {
  id: string;
  title: string;
  titleBangla: string;
  code: string;
  description: string;
  descriptionBangla: string;
  algorithm?: string[];
  flowchart?: FlowchartStep[];
}

export interface FlowchartStep {
  type: 'start' | 'process' | 'decision' | 'end' | 'input' | 'output';
  text: string;
  textBangla: string;
}

export type Language = 'html' | 'c';
