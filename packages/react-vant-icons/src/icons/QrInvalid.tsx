import * as React from 'react';
import IconBase, { IconBaseProps } from './IconBase';

const SvgIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M708.333 861.111c-23.012 0-41.666-18.655-41.666-41.667 0-23.011 18.654-41.666 41.666-41.666 23.012 0 41.667 18.655 41.667 41.666 0 23.012-18.655 41.667-41.667 41.667zm125-194.444h55.556l-55.556 55.555v-42.075l6.74 2.792-6.74-6.74v-9.532zm-277.777-32.544l55.555 55.556v199.21c-30.682 0-55.555-24.873-55.555-55.556v-199.21zM750 527.778v138.889h83.333v-138.89c30.683 0 55.556 24.874 55.556 55.556v138.89h-88.1L694.445 615.876v-32.544h-32.543l-55.37-55.37a56.305 56.305 0 014.58-.185H750zm-638.889-338.1l55.556 55.556v171.433h171.432l55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555V189.679zm305.556-78.567c30.682 0 55.555 24.873 55.555 55.556v226.988l-55.555-55.556V166.667H245.234L189.68 111.11h226.988zm166.666 55.556v250h250v-250h-250zm0-55.556h250c30.683 0 55.556 24.873 55.556 55.556v250c0 30.682-24.873 55.555-55.556 55.555h-250c-30.682 0-55.555-24.873-55.555-55.555v-250c0-30.683 24.873-55.556 55.555-55.556zM166.667 583.333v250h250v-250h-250zm0-55.555h250c30.682 0 55.555 24.873 55.555 55.555v250c0 30.683-24.873 55.556-55.555 55.556h-250c-30.683 0-55.556-24.873-55.556-55.556v-250c0-30.682 24.873-55.555 55.556-55.555z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

const SvgQrInvalid = (props: Omit<IconBaseProps, 'name'>) => {
  <IconBase name={SvgQrInvalid.name} {...props}>
    <SvgIcon />
  </IconBase>;
};

export default SvgQrInvalid;
