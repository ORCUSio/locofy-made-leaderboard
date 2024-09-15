import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-row-styling-default border-gainsboro-200 border-b-[1px] border-solid box-border flex flex-row items-start justify-between pt-[1.25rem] pb-[1.125rem] pl-[2.687rem] pr-[2.812rem] top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-center text-[1.375rem] text-chocolate font-inter lg:pl-[1.313rem] lg:pr-[1.375rem] lg:box-border ${className}`}
    >
      <div className="h-[5.031rem] w-[75rem] relative bg-row-styling-default border-gainsboro-200 border-b-[1px] border-solid box-border hidden max-w-full" />
      <div className="w-[27.231rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[1.5rem] max-w-full">
          <div className="w-[1.5rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem] box-border">
            <div className="self-stretch h-[1.563rem] relative">
              <div className="absolute top-[0rem] left-[0rem] w-full h-full opacity-[0.9] mix-blend-normal z-[1]">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[1.5rem] h-[1.5rem]"
                  loading="lazy"
                  alt=""
                />
                <div className="absolute top-[0rem] left-[0.063rem] font-medium inline-block w-[1.438rem] h-[1.563rem] whitespace-nowrap z-[1]">
                  
                </div>
              </div>
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent] flex-1 font-row-primary-text text-[0.875rem] text-gray-300 max-w-full z-[1]"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <img width="15px" height="15px" src="/search.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#d5d5d5" },
              "& .MuiInputBase-root": {
                height: "38px",
                backgroundColor: "#f3f3f3",
                paddingLeft: "16.5px",
                borderRadius: "19px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": {
                paddingLeft: "13.4px",
                color: "rgba(32, 34, 36, 0.5)",
              },
            }}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.031rem] text-left text-[1rem] text-darkslategray font-row-primary-text">
        <img
          className="h-[2.5rem] w-[2.5rem] relative z-[1]"
          alt=""
          src="/photo-9.svg"
        />
        <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
          <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[4.625rem] z-[1]">
            Username
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.125rem] h-[1.125rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/more.svg"
          />
        </div>
      </div>
    </header>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
