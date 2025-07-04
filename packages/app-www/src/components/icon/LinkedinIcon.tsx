import * as React from "react";

export interface LinkedInIconProps extends React.SVGProps<SVGSVGElement> {
  clipPathId: string;
}
const LinkedInIcon = ({ clipPathId, ...props }: LinkedInIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.04 0.04 75.767 76.248" {...props}>
    <defs>
      <clipPath id={clipPathId}>
        <path d="M234.33 20.558h84.367v84.839H234.33Zm27.543 17.191H250.64v33.794h11.233zm-5.617 38.408h-.073c-3.769 0-6.207 2.595-6.207 5.838 0 3.316 2.512 5.839 6.355 5.839 3.842 0 6.207-2.523 6.28-5.839 0-3.243-2.438-5.838-6.355-5.838zm11.832-38.408s.148 30.623 0 33.794h11.233v-4.901h-.075c1.478 2.307 4.138 5.694 10.198 5.694 7.39 0 12.931-4.83 12.931-15.21V37.749h-11.232v18.079c0 4.543-1.625 7.642-5.69 7.642-3.103 0-4.951-2.09-5.763-4.108-.297-.722-.37-1.731-.37-2.741V37.749Z" />
      </clipPath>
    </defs>
    <path
      d="M239.33 95.036c0 2.96 2.46 5.361 5.495 5.361h63.376c3.035 0 5.496-2.401 5.496-5.361V30.919c0-2.961-2.46-5.361-5.496-5.361h-63.376c-3.035 0-5.495 2.4-5.495 5.361z"
      clipPath="url(#linkedin)"
      transform="matrix(1.01883 0 0 -1.01883 -243.877 102.327)"
    />
  </svg>
);
export default LinkedInIcon;
