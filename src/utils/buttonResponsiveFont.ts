import React from 'react';

/**
 * Utility functions for responsive design
 */

/**
 * Determines the appropriate font size class based on window width
 * @param width - Current window width (defaults to window.innerWidth)
 * @param smallScreenWidth - Width threshold for smaller text (defaults to 360px)
 * @param smallSizeClass - Tailwind class for small screens (defaults to 'text-base')
 * @param defaultSizeClass - Tailwind class for larger screens (defaults to 'text-lg')
 * @returns The appropriate Tailwind text size class
 */
export const getResponsiveFontSize = (
  width = window.innerWidth,
  smallScreenWidth = 360,
  smallSizeClass = 'text-base',
  defaultSizeClass = 'text-lg'
): string => {
  if (width < smallScreenWidth) {
    return smallSizeClass;
  } else {
    return defaultSizeClass;
  }
};

/**
 * Hook to get and update responsive font size on window resize
 * @param smallScreenWidth - Width threshold for smaller text (defaults to 360px)
 * @param smallSizeClass - Tailwind class for small screens (defaults to 'text-base')
 * @param defaultSizeClass - Tailwind class for larger screens (defaults to 'text-lg')
 * @returns The current responsive font size class and resize handler function
 */
export const useResponsiveFontSize = (
  smallScreenWidth = 360,
  smallSizeClass = 'text-base',
  defaultSizeClass = 'text-lg'
) => {
  const [fontSize, setFontSize] = React.useState(() =>
    getResponsiveFontSize(
      window.innerWidth,
      smallScreenWidth,
      smallSizeClass,
      defaultSizeClass
    )
  );

  const handleResize = React.useCallback(() => {
    setFontSize(
      getResponsiveFontSize(
        window.innerWidth,
        smallScreenWidth,
        smallSizeClass,
        defaultSizeClass
      )
    );
  }, [smallScreenWidth, smallSizeClass, defaultSizeClass]);

  React.useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return { fontSize, handleResize };
};
