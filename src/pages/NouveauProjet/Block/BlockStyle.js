const getBlockStyle = (block) => {
  const style = block.getType();
  switch (style) {
    case 'blockquote':
      return 'editor-blockquote';
    case 'atomic':
      return 'editor-center';
    default: return null;
  }
};

export default getBlockStyle;
