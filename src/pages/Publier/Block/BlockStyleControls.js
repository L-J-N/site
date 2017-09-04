import React from 'react';
import StyleButton from '../Component/StyleButton';

const BLOCK_TYPES = [
  { label: 'Titre 1', style: 'header-one' },
  { label: 'Titre 2', style: 'header-three' },
  { label: 'Normal', style: 'unstyled' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="editor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          />
      )}
    </div>
  );
};
export default BlockStyleControls;
