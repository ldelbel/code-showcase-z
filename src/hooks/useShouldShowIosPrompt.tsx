export const useShouldShowIosPrompt = () => {
  const isIphone = /iphone/i.test(navigator.userAgent);
  console.log('UserAgent: ', navigator.userAgent);

  const isStandalone = (window.navigator as any).standalone === true;

  return isIphone && !isStandalone;
};
