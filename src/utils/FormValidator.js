const isRequired = (value) => {
  if (value === undefined || value === null
    || (typeof(value) === "string" && value.trim() === "")
    || (typeof(value) === "number" && value === 0)
    || (typeof(value) === "boolean" && value === false)) {
    return 'Ce champ est obligatoire';
  }
};
const telRegExp = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

const isTelephone = (value) => {
  if (!telRegExp.test(value)) {
    return 'Le format du téléphone n\'est pas correct';
  }
};


const mailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isMail = (value) => {
  if (!mailRegExp.test(value)) {
    return 'Le format du mail n\'est pas correct';
  }
};


export {
  isRequired,
  isTelephone,
  isMail
};
