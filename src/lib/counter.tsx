export interface IEventStats {
  icon: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export const eventStats: IEventStats[] = [
  {
    icon: "🚀",
    label: 'Projects Completed',
    value: 10,
    suffix: '',
    description: 'Successful launches',
  },
  {
    icon: "⏳",
    label: 'Average Delivery Time',
    value: 6,
    suffix: 'w',
    description: 'Weeks per project',
  },
  {
    icon: "🤝",
    label: 'Clients Served',
    value: 6,
    suffix: '',
    description: 'Satisfied clients',
  },
  {
    icon: "🌐",
    label: 'Technologies Used',
    value: 20,
    suffix: '+',
    description: 'Modern frameworks & tools',
  },
];

