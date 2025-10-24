'use client';

import { Clock } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
  placeholder?: string;
  className?: string;
}

export function TimePicker({
  value,
  onChange,
  placeholder = 'Selecionar horário',
  className,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedHour, setSelectedHour] = React.useState<string | undefined>();
  const [selectedMinute, setSelectedMinute] = React.useState<
    string | undefined
  >();

  React.useEffect(() => {
    if (value) {
      const [hour, minute] = value.split(':');
      setSelectedHour(hour || '12');
      setSelectedMinute(minute || '00');
    }
  }, [value]);

  // Generate hours (00-23)
  const hours = Array.from({ length: 24 }, (_, i) => {
    return i.toString().padStart(2, '0');
  });

  // Generate minutes (00-59)
  const minutes = Array.from({ length: 60 }, (_, i) => {
    return i.toString().padStart(2, '0');
  });

  const handleHourChange = (hour: string) => {
    setSelectedHour(hour);
    const timeString = `${hour}:${selectedMinute ? selectedMinute : ""}`;
    if (onChange) {
      onChange(timeString);
    }
  };

  const handleMinuteChange = (minute: string) => {
    setSelectedMinute(minute);
    const timeString = `${selectedHour}:${minute}`;
    if (onChange) {
      onChange(timeString);
    }
  };

  const displayTime =
    value ||
    (selectedHour && selectedMinute
      ? `${selectedHour}:${selectedMinute}`
      : null);

  return (
    <Popover open={open} onOpenChange={setOpen} modal={undefined}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full h-11 justify-start text-left font-normal bg-[#242424] input-field',
            'shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4)]',
            'hover:bg-[#242424] hover:text-whitesmoke',
            !displayTime && 'text-muted-foreground',
            className
          )}
        >
          <Clock className="mr-2 h-4 w-4 text-whitesmoke" />
          {displayTime ? (
            <span className="text-whitesmoke">{displayTime}</span>
          ) : (
            <span className="text-whitesmoke -ml-2">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-auto p-0 border-none rounded-md" 
        onInteractOutside={() => setOpen(false)}
        onEscapeKeyDown={() => setOpen(false)}
      >
        <div className="flex justify-between p-2 rounded-sm bg-[#2b2b2b]">
          <Select onValueChange={handleHourChange} value={selectedHour}>
            <SelectTrigger className="w-[50px] h-8 bg-[#2b2b2b]">
              <SelectValue placeholder="Hora" />
            </SelectTrigger>
            <SelectContent>
              {hours.map((hour) => (
                <SelectItem key={hour} value={hour}>
                  {hour}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={handleMinuteChange} value={selectedMinute}>
            <SelectTrigger className="w-[50px] h-8 bg-[#2b2b2b]">
              <SelectValue placeholder="Min" />
            </SelectTrigger>
            <SelectContent>
              {minutes.map((minute) => (
                <SelectItem key={minute} value={minute}>
                  {minute}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
}
