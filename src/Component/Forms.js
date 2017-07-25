import React from 'react';
import {css} from 'glamor';

const div = css({
  margin: '0 0 12px',
  ':not(:last-child)' : {
    marginBottom: '0.75rem',
  }
});

const label = css({
  color: '#363636',
  display: 'block',
  fontWeight: '700',
  marginBottom: '0.75rem',
  paddingRight: "10px"
});

const input = css({
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  border: '1px solid transparent',
  borderColor: '#dbdbdb',
  borderRadius: '3px',
  fontSize: '1rem',
  height: '2.25em',
  lineHeight: '1.5',
  paddingBottom: 'calc(0.375em - 1px)',
  paddingLeft: 'calc(0.625em - 1px)',
  paddingRight: 'calc(0.625em - 1px)',
  paddingTop: 'calc(0.375em - 1px)',
  position: 'relative',
  verticalAlign: 'top',
  backgroundColor: 'white',
  color: "#363636",
  boxShadow: 'inset 0 1px 2px rgba(10, 10, 10, 0.1)',
  maxWidth: '100%',
  width: '100%',
  ':focus': {
    outline: 'none',
  },
  ':hover': {
    borderColor: '#b5b5b5'
  },
});

const select = css({
  ':after': {
    border: '1px solid #3273dc',
    borderRight: 0,
    borderTop: 0,
    content: '" "',
    display: 'block',
    height: '0.5em',
    pointerEvents: 'none',
    position: 'absolute',
    transform: 'rotate(-45deg)',
    width: '0.5em',
    marginTop: '-0.375em',
    right: '0.9em',
    top: '50%',
    zIndex: 4,
  },
  display: "inline-block",
  height: "2.25em",
  maxWidth: "100%",
  position: "relative",
  verticalAlign: "top",
});

const selectSpecificiy = css({
  paddingRight: '2.5em',
  height : '100%',
});

const help = css({
  fontSize: 'small',
  fontWeight: 100,
  fontStyle: 'italic'
});

const Wrapper = (props) => {
  return (
    <div {...div}>
      <label  {...label}>
        {props.label}
        { props.help ? <span {...help} > {props.help}</span> : null }
      </label>
      {props.children}
    </div>
  )
}

const Input = (props) => {
  const type = props.type || "text";
  return (
    <Wrapper {...props}>
      <input className={input} type={type} name={props.name} value={props.value} onChange={props.onChange}/>
    </Wrapper>
  )
};

const Select = (props) => {
  return (
    <Wrapper {...props} >
      <span className={select}>
        <select className={input} name={props.name} {...selectSpecificiy } value={props.value}
          onChange={props.onChange}>
          { props.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
        </select>
       </span>
    </Wrapper>
  )
};

export {
  Input,
  Select,
};
