export interface ITypes {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: 'low'|'medium'|'high';
}
