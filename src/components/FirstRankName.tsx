import { useMemo } from "react";
import PropTypes from "prop-types";

const FirstRankName = ({
  className = "",
  propFlex,
  propPadding,
  propBackgroundColor,
  propBorder,
  percentageChange,
  propTextShadow,
  secondaryText,
}) => {
  const firstRankNameStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const firstRankTitleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const indicatorBackgroundStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const percentageChangeStyle = useMemo(() => {
    return {
      textShadow: propTextShadow,
    };
  }, [propTextShadow]);

  return (
    <div
      className={`flex-1 flex flex-col items-end justify-start gap-[0.5rem] text-center text-[1rem] text-black font-poppins ${className}`}
      style={firstRankNameStyle}
    >
      <div
        className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[2rem] pr-[1.812rem]"
        style={firstRankTitleStyle}
      >
        <div className="flex-1 flex flex-row items-start justify-start pt-[1.056rem] px-[1.437rem] pb-[1rem] relative shrink-0 z-[2]">
          <div
            className="h-[calc(100%_-_16.5px)] w-[calc(100%_-_16.5px)] absolute !m-[0] top-[0.001rem] right-[-0.731rem] bottom-[1.031rem] left-[1.763rem] rounded-31xl bg-greenyellow border-greenyellow border-[1px] border-solid box-border [transform:_rotate(45deg)] [transform-origin:0_0]"
            style={indicatorBackgroundStyle}
          />
          <div
            className="flex-1 relative font-semibold [text-shadow:1px_0_0_#adef44,_0_1px_0_#adef44,_-1px_0_0_#adef44,_0_-1px_0_#adef44] z-[1]"
            style={percentageChangeStyle}
          >
            {percentageChange}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start shrink-0 text-[1.625rem] font-row-primary-text">
        <h3 className="m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-[inherit] inline-block min-w-[7.438rem] mq450:text-[1.313rem] mq450:leading-[1.938rem]">
          Username
        </h3>
        <div className="self-stretch relative text-[1.375rem] leading-[150%] text-gray-400 z-[1] mq450:text-[1.125rem] mq450:leading-[1.625rem]">
          {secondaryText}
        </div>
      </div>
    </div>
  );
};

FirstRankName.propTypes = {
  className: PropTypes.string,
  percentageChange: PropTypes.string,
  secondaryText: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propTextShadow: PropTypes.any,
};

export default FirstRankName;
