const INSERT_REGEX = /[.]|\s/g;
const OMIT_REGEX = /\s/g;
const REPLACE_REGEX = /[A-Z]/g;

export default function kebabCase(str){
  let kebab = str;
  kebab = kebab.replace(INSERT_REGEX, () => "-");
  kebab = kebab.replace(OMIT_REGEX, () => "");
  kebab = kebab
    .replace(REPLACE_REGEX, match => "-" + match.toLowerCase())
    .substring(1);
  return kebab;
};