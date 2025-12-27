import { ArrowDown, ArrowRight, ArrowUp, CheckCircle, Circle, CircleOff, HelpCircle, Timer } from 'lucide-react'

export const labels = [
    {
        label: 'Bug',
        value: 'bug'
    },
    {
        label: 'Feature',
        value: 'feature'
    },
    {
        label: 'Documentation',
        value: 'documentation'
    }
]

export const statuses = [
    {
        icon: HelpCircle,
        label: 'Backlog',
        value: 'backlog'
    },
    {
        icon: Circle,
        label: 'Todo',
        value: 'todo'
    },
    {
        icon: Timer,
        label: 'In Progress',
        value: 'in progress'
    },
    {
        icon: CheckCircle,
        label: 'Done',
        value: 'done'
    },
    {
        icon: CircleOff,
        label: 'Canceled',
        value: 'canceled'
    }
]

export const priorities = [
    {
        icon: ArrowDown,
        label: 'Low',
        value: 'low'
    },
    {
        icon: ArrowRight,
        label: 'Medium',
        value: 'medium'
    },
    {
        icon: ArrowUp,
        label: 'High',
        value: 'high'
    }
]
