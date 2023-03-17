import { LangCodesComplete } from "../Codes/LangCodesComplete";
import Flags from "../Flags/Flags";

export default (props) => {
  const { LangCode, fallback = null, ...rest } = props;
  if (!LangCode) return fallback;

  const country = LangCodesComplete.find(
    (x) => x.l.toUpperCase() == LangCode.toUpperCase()
  );

  if (!country) return fallback;

  const flag = Flags["flag_" + country.cc.toUpperCase()];
  return flag ? (
    <img {...rest} title={country.n} alt={country.n} src={flag} />
  ) : (
  fallback
  );
};
