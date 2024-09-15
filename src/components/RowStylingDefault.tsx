import PropTypes from "prop-types";

const RowStylingDefault = ({ className = "" }) => {
  return (
    <div
      className={`w-[65.625rem] h-[0rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border relative max-w-full ${className}`}
    >
      <div className="h-[4rem] flex-1 relative bg-row-styling-default max-w-full" />
      <div className="h-full w-full absolute !m-[0] right-[0rem] left-[0rem] bg-gainsboro-100" />
    </div>
  );
};

RowStylingDefault.propTypes = {
  className: PropTypes.string,
};

export default RowStylingDefault;
