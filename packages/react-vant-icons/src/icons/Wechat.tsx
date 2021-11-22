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
      d="M677.715 374.35c141.332 0 267.175 102.227 267.175 227.747 0 70.018-46.134 132.111-108.227 179.37l-1.886 1.427 23.717 78.33-86.276-47.07-8.995 2.206c-28.5 6.962-57.153 13.483-85.508 13.483-149.681 0-267.538-102.106-267.538-227.746 0-125.4 117.857-227.747 267.538-227.747zM370.608 139c154.643 0 290.166 93.899 317.513 220.264-9.922-1.087-19.965-1.81-30.25-1.81-149.44 0-267.539 111.278-267.539 248.384 0 22.81 3.51 44.777 9.68 65.777-9.68.725-19.481 1.207-29.404 1.207-38.152 0-69.015-7.497-106.732-14.998l-3.501-.692-109.992 55.036 31.46-94.381C103.191 562.75 56 492.025 56 405.85 56 256.554 197.695 139 370.608 139zm224.22 357.008c-19.724 0-35.696 15.931-35.696 35.604 0 19.673 15.972 35.605 35.696 35.605 19.723 0 35.696-15.932 35.696-35.605 0-19.673-15.973-35.604-35.696-35.604zm173.155-.241c-19.723 0-35.696 15.931-35.696 35.604 0 19.673 15.973 35.604 35.696 35.604 19.724 0 35.696-15.931 35.696-35.604 0-19.673-15.972-35.604-35.696-35.604zm-503.131-226.66c-23.596 0-42.715 19.069-42.715 42.604s19.119 42.604 42.715 42.604c23.716 0 42.835-19.19 42.715-42.604 0-23.535-19.12-42.605-42.715-42.605zm219.742 0c-23.596 0-42.715 19.069-42.715 42.604s19.119 42.604 42.715 42.604c23.595 0 42.835-19.19 42.715-42.604 0-23.535-19.12-42.605-42.715-42.605z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

const SvgWechat = (props: Omit<IconBaseProps, 'name'>) => {
  <IconBase name={SvgWechat.name} {...props}>
    <SvgIcon />
  </IconBase>;
};

export default SvgWechat;
