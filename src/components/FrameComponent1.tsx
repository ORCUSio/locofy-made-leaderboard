import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import FirstRankName from "./FirstRankName";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.812rem] box-border max-w-full shrink-0 text-left text-[2rem] text-black font-row-primary-text lg:pl-[1.375rem] lg:pr-[1.375rem] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[3.125rem] max-w-full mq750:gap-[1.563rem]">
        <h2 className="m-0 self-stretch relative text-inherit font-normal font-[inherit] mq1050:text-[1.625rem] mq450:text-[1.188rem]">
          Leaderboard
        </h2>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.875rem] pr-[2.062rem] box-border max-w-full text-center text-[1rem] font-poppins">
          <div className="flex-1 flex flex-row items-end justify-start gap-[9.312rem] max-w-full mq750:gap-[2.313rem] mq1050:gap-[4.625rem] mq1050:flex-wrap mq450:gap-[1.188rem]">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq750:flex-wrap mq750:min-w-full">
              <div className="flex flex-col items-start justify-start pt-[2.625rem] px-[0rem] pb-[0rem] mq750:flex-1 mq750:pt-[1.688rem] mq750:box-border">
                <div className="self-stretch flex flex-col items-end justify-start gap-[6.375rem] mq450:gap-[3.188rem]">
                  <div className="w-[16.531rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3.637rem] box-border">
                    <div className="flex flex-row items-start justify-start relative">
                      <img
                        className="h-[5.213rem] w-[4.988rem] relative"
                        loading="lazy"
                        alt=""
                        src="/group-1.svg"
                      />
                      <img
                        className="h-[13.056rem] w-[13.056rem] absolute !m-[0] bottom-[-11.756rem] left-[-4.094rem] rounded-[50%] object-cover z-[1]"
                        alt=""
                        src="/ellipse-120-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end py-[0rem] px-[4.687rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                    <FirstRankName
                      percentageChange="3"
                      secondaryText="$45,000"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1.625rem] font-row-primary-text">
                    <h3 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq450:text-[1.313rem]">
                      Top Performers
                    </h3>
                    <div className="relative text-[1rem] text-chocolate z-[1]">
                      Ranks are based on total volume of coins traded
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start gap-[12.012rem] text-[1.5rem] mq750:flex-1">
                <div className="flex flex-row items-start justify-end py-[0rem] pl-[4.75rem] pr-[4.625rem]">
                  <img
                    className="h-[5.744rem] w-[5.825rem] relative"
                    alt=""
                    src="/group-1-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem]">
                  <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0rem] pr-[0.125rem]">
                    <div className="flex flex-row items-start justify-start pt-[1.237rem] px-[1.687rem] pb-[1.168rem] relative shrink-0 z-[2]">
                      <img
                        className="h-[15.25rem] w-[15.25rem] absolute !m-[0] top-[-13.187rem] right-[-5.612rem] rounded-[50%] object-cover z-[1]"
                        alt=""
                        src="/ellipse-120-3@2x.png"
                      />
                      <div className="h-[calc(100%_-_19.3px)] w-[calc(100%_-_19.3px)] absolute !m-[0] top-[0rem] right-[-0.853rem] bottom-[1.206rem] left-[2.059rem] rounded-21xl bg-gold border-gold border-[1px] border-solid box-border [transform:_rotate(45deg)] [transform-origin:0_0]" />
                      <div className="flex-1 relative font-semibold inline-block [text-shadow:1px_0_0_#ffca28,_0_1px_0_#ffca28,_-1px_0_0_#ffca28,_0_-1px_0_#ffca28] min-w-[0.75rem] z-[1] mq450:text-[1.188rem] mq450:leading-[1.375rem]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start shrink-0 text-[1.875rem] font-row-primary-text">
                    <h2 className="m-0 self-stretch relative text-inherit leading-[150%] font-semibold font-[inherit] mq1050:text-[1.5rem] mq1050:leading-[2.25rem] mq450:text-[1.125rem] mq450:leading-[1.688rem]">
                      Username
                    </h2>
                    <div className="self-stretch relative text-[1.625rem] leading-[150%] text-gray-400 z-[1] mq450:text-[1.313rem] mq450:leading-[1.938rem]">
                      $50,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border min-w-[15.063rem] mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[7.812rem]">
                <div className="flex flex-row items-start justify-start pt-[0rem] px-[1.187rem] pb-[2.2rem]">
                  <div className="flex flex-row items-start justify-start relative">
                    <img
                      className="h-[5.213rem] w-[4.988rem] relative"
                      alt=""
                      src="/group-1-2.svg"
                    />
                    <img
                      className="h-[13.056rem] w-[13.056rem] absolute !m-[0] bottom-[-11.756rem] left-[-4.094rem] rounded-[50%] object-cover z-[1]"
                      alt=""
                      src="/ellipse-120-4@2x.png"
                    />
                  </div>
                </div>
                <FirstRankName
                  propFlex="unset"
                  propPadding="0rem 1.937rem 0rem 1.875rem"
                  propBackgroundColor="#49e89c"
                  propBorder="1px solid #49e89c"
                  percentageChange="2"
                  propTextShadow="1px 0 0 #49e89c, 0 1px 0 #49e89c, -1px 0 0 #49e89c, 0 -1px 0 #49e89c"
                  secondaryText="$48,000"
                />
                <div className="self-stretch flex flex-row items-start justify-end">
                  <FormControl
                    className="h-[2.375rem] text-[0.813rem] z-[1]"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#f6f6f6",
                      borderRadius: "10px",
                      width: "65.14522821576763%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        fontSize: 13,
                        fontWeight: "Mixed",
                        fontFamily: "Mixed",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "19px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="18px"
                          height="18px"
                          src="/chevrondown-1.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Filter by : Win Rate</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
