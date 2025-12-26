'use client'

import { PopoverProps } from '@radix-ui/react-popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

import { Preset } from '../data/presets'

interface PresetSelectorProps extends PopoverProps {
    presets: Preset[]
}

export function PresetSelector({ presets, ...props }: PresetSelectorProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedPreset, setSelectedPreset] = React.useState<Preset>()
    const router = useRouter()

    return (
        <Popover onOpenChange={setOpen} open={open} {...props}>
            <PopoverTrigger asChild>
                <Button
                    aria-expanded={open}
                    aria-label="Load a preset..."
                    className="flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
                    role="combobox"
                    variant="outline">
                    {selectedPreset ? selectedPreset.name : 'Load a preset...'}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Search presets..." />
                    <CommandList>
                        <CommandEmpty>No presets found.</CommandEmpty>
                        <CommandGroup heading="Examples">
                            {presets.map((preset) => (
                                <CommandItem
                                    key={preset.id}
                                    onSelect={() => {
                                        setSelectedPreset(preset)
                                        setOpen(false)
                                    }}>
                                    {preset.name}
                                    <Check
                                        className={cn(
                                            'ml-auto',
                                            selectedPreset?.id === preset.id ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup className="pt-0">
                            <CommandItem onSelect={() => router.push('/examples')}>More examples</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
