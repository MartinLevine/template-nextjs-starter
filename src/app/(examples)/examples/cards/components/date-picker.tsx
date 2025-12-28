import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

import DatePickerWithRange from './date-picker-with-range'

export function DemoDatePicker() {
    return (
        <Card>
            <CardContent>
                <div className="space-y-2">
                    <Label className="shrink-0" htmlFor="date">
                        Pick a date
                    </Label>
                    <DatePickerWithRange className="[&>button]:w-full" />
                </div>
            </CardContent>
        </Card>
    )
}
