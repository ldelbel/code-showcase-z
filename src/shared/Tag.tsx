const Tag = ({ text }: { text: string }) => {
  return (
    <div
      className="text-white font-bold py-1 px-2 bg-oldgoldlight rounded-2xl items-center justify-center flex"
      style={{
        fontSize: '15px',
        textAlign: 'right',
        maxWidth: 'fit-content',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        className="carved-text"
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
        }}
      >
        {text.length > 12 ? `${text.slice(0, 12)}...` : text}
      </span>
    </div>
  );
};

export default Tag;
