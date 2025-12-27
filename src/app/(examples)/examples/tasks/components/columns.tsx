'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'

import { labels, priorities, statuses } from '../data/data'
import { Task } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Task>[] = [
    {
        cell: ({ row }) => (
            <Checkbox
                aria-label="Select row"
                checked={row.getIsSelected()}
                className="translate-y-[2px]"
                onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
        ),
        enableHiding: false,
        enableSorting: false,
        header: ({ table }) => (
            <Checkbox
                aria-label="Select all"
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                className="translate-y-[2px]"
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            />
        ),
        id: 'select'
    },
    {
        accessorKey: 'id',
        cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
        enableHiding: false,
        enableSorting: false,
        header: ({ column }) => <DataTableColumnHeader column={column} title="Task" />
    },
    {
        accessorKey: 'title',
        cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.label)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">{row.getValue('title')}</span>
                </div>
            )
        },
        header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />
    },
    {
        accessorKey: 'status',
        cell: ({ row }) => {
            const status = statuses.find((status) => status.value === row.getValue('status'))

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />
    },
    {
        accessorKey: 'priority',
        cell: ({ row }) => {
            const priority = priorities.find((priority) => priority.value === row.getValue('priority'))

            if (!priority) {
                return null
            }

            return (
                <div className="flex items-center">
                    {priority.icon && <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{priority.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
        header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />
    },
    {
        cell: ({ row }) => <DataTableRowActions row={row} />,
        id: 'actions'
    }
]
