import { useMemo } from "react";
import PropTypes from "prop-types";

const Cell1 = ({ className = "", ellipse120, propBorderRadius }) => {
  const ellipseIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-[1.125rem] text-gray-100 font-row-primary-text ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-[1.062rem] px-[0.75rem] gap-[1rem]">
        <img
          className="h-[1.875rem] w-[1.875rem] relative rounded-[50%] object-cover"
          alt=""
          src={ellipse120}
          style={ellipseIconStyle}
        />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="w-[13.125rem] relative leading-[150%] flex items-center">
            Username
          </div>
          <div className="relative text-[0.813rem] leading-[150%] hidden opacity-[0.7]">
            Secondary Text
          </div>
        </div>
        <img
          className="h-[1rem] w-[1rem] relative hidden"
          alt=""
          src="/icon-right.svg"
        />
      </div>
    </div>
  );
};

Cell1.propTypes = {
  className: PropTypes.string,
  ellipse120: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default Cell1;
