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
      d="M722.222 555.578c92.056 0 166.667 74.555 166.667 166.666 0 92.056-74.611 166.667-166.667 166.667-92.055 0-166.666-74.611-166.666-166.667 0-92.11 74.61-166.666 166.666-166.666zm55.556-444.467c30.722 0 55.555 24.833 55.555 55.556v364.166C800.5 511.723 762.89 500 722.223 500 599.5 500 500 599.5 500 722.222c0 66.722 30.056 125.945 76.667 166.667H222.222c-30.722 0-55.555-24.833-55.555-55.556V166.667c0-30.723 24.833-55.556 55.555-55.556zm8.278 519.522c-8.112-8.11-21.278-8.11-29.445 0l-34.389 34.334-34.389-34.334c-8.166-8.11-21.333-8.11-29.444 0-8.167 8.167-8.167 21.334 0 29.445l26.5 26.5h-25.167c-11.5 0-20.833 9.333-20.833 20.833 0 11.5 9.333 20.833 20.833 20.833h41.667v27.778h-41.667c-11.5 0-20.833 9.334-20.833 20.834s9.333 20.833 20.833 20.833h41.667V821.3c0 11.5 9.333 20.833 20.833 20.833 11.5 0 20.834-9.333 20.834-20.833v-23.611h41.666c11.5 0 20.834-9.333 20.834-20.833 0-11.5-9.334-20.834-20.834-20.834h-41.666v-27.778h41.666c11.5 0 20.834-9.333 20.834-20.833 0-11.5-9.334-20.833-20.834-20.833h-25.166l26.5-26.5c8.166-8.111 8.166-21.278 0-29.445zM416.666 500h-111.11c-15.334 0-27.778 12.444-27.778 27.778 0 15.333 12.444 27.778 27.778 27.778h111.11c15.334 0 27.778-12.445 27.778-27.778C444.444 512.444 432 500 416.667 500zm111.112-111.111H305.556c-15.334 0-27.778 12.444-27.778 27.778 0 15.333 12.444 27.777 27.778 27.777h222.222c15.333 0 27.778-12.444 27.778-27.777 0-15.334-12.445-27.778-27.778-27.778zm111.11-111.111H305.557c-15.334 0-27.778 12.444-27.778 27.778 0 15.333 12.444 27.777 27.778 27.777h333.333c15.333 0 27.778-12.444 27.778-27.777 0-15.334-12.445-27.778-27.778-27.778z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const SvgBalanceList = (props: Omit<IconBaseProps, 'name'>) => {
  <IconBase name={SvgBalanceList.name} {...props}>
    <SvgIcon />
  </IconBase>;
};

export default SvgBalanceList;
