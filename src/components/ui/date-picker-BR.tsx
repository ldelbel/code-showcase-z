'use client';

import { format, getMonth, getYear, setMonth, setYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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

interface DatePickerProps {
  startYear?: number;
  endYear?: number;
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DatePickerBR({
  startYear = getYear(new Date()) - 100,
  endYear = getYear(new Date()),
  value,
  onChange,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [calendarMonth, setCalendarMonth] = React.useState<Date | undefined>(
    value || new Date(2000, 0, 1)
  );
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (value) {
      setDate(value);
      setCalendarMonth(value);
    }
  }, [value]);

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  const handleMonthChange = (month: string) => {
    const index = months.findIndex((m) => m === month.toLowerCase());
    const baseDate = calendarMonth || new Date();
    const newCalendarMonth = setMonth(baseDate, index);
    setCalendarMonth(newCalendarMonth);
  };

  const handleYearChange = (year: string) => {
    const baseDate = calendarMonth || new Date();
    const newCalendarMonth = setYear(baseDate, parseInt(year));
    setCalendarMonth(newCalendarMonth);
  };

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      handleDateChange(selectedDate);
      setOpen(false);
    }
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    const dateOnly = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    return dateOnly > todayOnly;
  };

  return (
    <Popover open={open} onOpenChange={setOpen} modal={undefined}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[250px] h-11 justify-start text-left font-normal bg-[#242424] input-field',
            'shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4)]',
            'hover:bg-[242424] hover:text-whitesmoke',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-whitesmoke" />
          {date ? (
            format(date, 'dd/MM/yyyy', { locale: ptBR })
          ) : (
            <span className="text-whitesmoke">Selecione uma data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-none rounded-md">
        <div className="flex justify-between p-2 bg-[#2b2b2b] rounded-t-sm">
          <Select
            onValueChange={handleMonthChange}
            value={calendarMonth ? months[getMonth(calendarMonth)] : undefined}
          >
            <SelectTrigger className="w-[110px] h-8 bg-[#2b2b2b]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={handleYearChange}
            value={
              calendarMonth ? getYear(calendarMonth).toString() : undefined
            }
          >
            <SelectTrigger className="w-[110px] h-8 bg-[#2b2b2b]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
          month={calendarMonth}
          onMonthChange={setCalendarMonth}
          locale={ptBR}
          disabled={isDateDisabled}
        />
      </PopoverContent>
    </Popover>
  );
}
