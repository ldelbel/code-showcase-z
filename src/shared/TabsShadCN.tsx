'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  console.log('list ref', ref);
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & {
  'data-state'?: 'active' | 'inactive';
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, children, ...props }, ref) => {
  const [dataState, setDataState] = React.useState<
    'active' | 'inactive' | undefined
  >(undefined);

  React.useEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      const state = ref.current.dataset.state as
        | 'active'
        | 'inactive'
        | undefined;
      setDataState(state);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-state'
          ) {
            const newState = (mutation.target as HTMLElement).dataset.state as
              | 'active'
              | 'inactive'
              | undefined;
            setDataState(newState);
          }
        });
      });

      observer.observe(ref.current, { attributes: true });

      return () => observer.disconnect();
    }
  }, [ref]);

  console.log('data-state', dataState);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all outline-none border-none disabled:pointer-events-none disabled:opacity-50 bg-transparent data-[state=active]:bg-golden-gradient data-[state=active]:text-foreground data-[state=active]:shadow',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'font-bold',
          'font-rajdhani',
          'text-lg',

          dataState === 'inactive' &&
            'bg-golden-gradient bg-clip-text text-transparent',
          'shadow-text',
          'outline-none',

          dataState === 'active' && 'carved-text',

          dataState === 'active' && 'text-foreground'
        )}
      >
        {children}
      </span>
    </TabsPrimitive.Trigger>
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
