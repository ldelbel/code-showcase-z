interface TabsContainerProps {
  children: React.ReactNode;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ children }) => {
  return (
    <div className='tabs-container sticky top-0 z-10'>
      {children}
    </div>
  );
};

export default TabsContainer;