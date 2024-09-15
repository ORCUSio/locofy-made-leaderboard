import { useMemo } from "react";
import RowCell from "./RowCell";
import PropTypes from "prop-types";

const Cell2 = ({
  className = "",
  propWidth,
  propFlex,
  propMinWidth,
  primaryText,
  propPadding,
  propWidth1,
  propFontSize,
  propDisplay,
  propAlignSelf,
  propFontWeight,
  propTextTransform,
}) => {
  const cellStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start text-left text-[1.125rem] text-gray-100 font-row-primary-text ${className}`}
      style={cellStyle}
    >
      <RowCell
        propPadding={propPadding}
        primaryText={primaryText}
        propWidth={propWidth1}
        propFontSize={propFontSize}
        propDisplay={propDisplay}
        propAlignSelf={propAlignSelf}
        propFontWeight={propFontWeight}
        propTextTransform={propTextTransform}
      />
    </div>
  );
};

Cell2.propTypes = {
  className: PropTypes.string,
  primaryText: PropTypes.string,
  propPadding: PropTypes.string,
  propWidth1: PropTypes.string,
  propFontSize: PropTypes.string,
  propDisplay: PropTypes.string,
  propAlignSelf: PropTypes.string,
  propFontWeight: PropTypes.string,
  propTextTransform: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Cell2;
