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
    <g fill="currentColor" fillRule="nonzero">
      <path d="M111.111 222.222v555.556H888.89V222.222H111.11zm0-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555v555.556c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V222.222c0-30.682 24.873-55.555 55.555-55.555z" />
      <path d="M583.579 534.542l71.7 35.85c13.722 6.862 19.284 23.547 12.423 37.269-6.86 13.721-23.546 19.283-37.267 12.422l-102.657-51.328v264.578h-55.556V568.755l-102.657 51.328c-13.721 6.861-30.407 1.3-37.267-12.422-6.861-13.722-1.3-30.407 12.422-37.268l71.94-35.97c-32.652-6.872-58.478-17.21-72.136-30.08-41.277-38.9-41.277-103.851-.591-144.537 19.603-19.603 45.748-30.44 73.47-30.44 19.673 0 38.544 5.453 54.82 15.594V222.222h55.555v123.244c16.456-10.465 35.626-16.1 55.623-16.1 27.722 0 53.868 10.837 73.47 30.44 40.687 40.686 40.687 105.637-.59 144.536-13.737 12.946-39.783 23.329-72.702 30.2zM451.588 399.09c-9.19-9.19-21.198-14.168-34.185-14.168-12.983 0-24.999 4.98-34.186 14.168-18.794 18.794-18.794 47.668-.591 64.823 9.059 8.537 44.212 18.186 87.947 22.325-3.51-43.209-11.421-79.649-18.985-87.148zm97.628 0c-7.563 7.5-15.474 43.94-18.984 87.148 43.735-4.139 78.888-13.788 87.946-22.325 18.203-17.155 18.203-46.03-.59-64.823-9.188-9.188-21.204-14.168-34.187-14.168-12.987 0-24.994 4.978-34.185 14.168z" />
    </g>
  </svg>
);

const SvgGiftCardO = (props: Omit<IconBaseProps, 'name'>) => {
  <IconBase name={SvgGiftCardO.name} {...props}>
    <SvgIcon />
  </IconBase>;
};

export default SvgGiftCardO;
