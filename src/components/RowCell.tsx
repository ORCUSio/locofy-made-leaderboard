import { useMemo } from "react";
import PropTypes from "prop-types";

const RowCell = ({
  className = "",
  propPadding,
  primaryText,
  propWidth,
  propFontSize,
  propDisplay,
  propAlignSelf,
  propFontWeight,
  propTextTransform,
}) => {
  const rowCellStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const primaryTextStyle = useMemo(() => {
    return {
      width: propWidth,
      fontSize: propFontSize,
      display: propDisplay,
      alignSelf: propAlignSelf,
      fontWeight: propFontWeight,
      textTransform: propTextTransform,
    };
  }, [
    propWidth,
    propFontSize,
    propDisplay,
    propAlignSelf,
    propFontWeight,
    propTextTransform,
  ]);

  return (
    <div
      className={`flex-1 overflow-hidden flex flex-row items-center justify-center py-[1.156rem] px-[0.75rem] gap-[0.5rem] text-left text-[1.125rem] text-gray-100 font-row-primary-text ${className}`}
      style={rowCellStyle}
    >
      <img
        className="h-[1rem] w-[1rem] relative hidden"
        alt=""
        src="/icon-right.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start">
        <div
          className="w-[13.625rem] relative leading-[150%] flex items-center"
          style={primaryTextStyle}
        >
          {primaryText}
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
  );
};

RowCell.propTypes = {
  className: PropTypes.string,
  primaryText: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propFontSize: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFontWeight: PropTypes.any,
  propTextTransform: PropTypes.any,
};

export default RowCell;
