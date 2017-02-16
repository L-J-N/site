import Media from '../Component/Media';

const getBlockRenderer = (contentBlock) => {
  const type = contentBlock.getType();
  if (type === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
};

export default getBlockRenderer;
