import Cell2 from "./Cell2";
import Cell from "./Cell";
import RowStylingDefault from "./RowStylingDefault";
import Cell1 from "./Cell1";
import PropTypes from "prop-types";

const TableContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[54.75rem] flex flex-col items-start justify-start gap-[0.312rem] max-w-full text-left text-[0.875rem] text-gray-100 font-row-primary-text mq1050:h-auto ${className}`}
    >
      <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-start justify-start py-[0rem] pl-[1.437rem] pr-[0rem] box-border gap-[1.468rem] max-w-full shrink-0 mq1050:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[0.844rem] h-[1.106rem] relative"
            loading="lazy"
            alt=""
            src="/group-56303.svg"
          />
        </div>
        <div className="hidden flex-col items-start justify-start">
          <div className="relative leading-[150%]">Primary Text</div>
          <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
            Secondary Text
          </div>
        </div>
        <img
          className="h-[1rem] w-[1rem] relative hidden"
          alt=""
          src="/icon-right.svg"
        />
        <div className="flex-1 flex flex-row items-start justify-start min-w-[40.188rem] max-w-full [row-gap:20px] mq750:min-w-full mq1050:flex-wrap">
          <Cell2
            propWidth="6.25rem"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="RANK"
            propPadding="0.75rem"
            propWidth1="unset"
            propFontSize="1rem"
            propDisplay="unset"
            propAlignSelf="stretch"
            propFontWeight="600"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="17.5rem"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="USERNAME"
            propPadding="0.75rem"
            propWidth1="unset"
            propFontSize="1rem"
            propDisplay="unset"
            propAlignSelf="stretch"
            propFontWeight="600"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="13rem"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="Average Win Rate"
            propPadding="0.75rem"
            propWidth1="unset"
            propFontSize="1rem"
            propDisplay="unset"
            propAlignSelf="stretch"
            propFontWeight="600"
            propTextTransform="uppercase"
          />
          <Cell2
            propWidth="12.5rem"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="Average ROI"
            propPadding="0.75rem"
            propWidth1="unset"
            propFontSize="1rem"
            propDisplay="unset"
            propAlignSelf="stretch"
            propFontWeight="600"
            propTextTransform="uppercase"
          />
          <Cell2
            propWidth="unset"
            propFlex="1"
            propMinWidth="8.188rem"
            primaryText="Total Volume Traded"
            propPadding="0.75rem"
            propWidth1="unset"
            propFontSize="1rem"
            propDisplay="unset"
            propAlignSelf="stretch"
            propFontWeight="600"
            propTextTransform="uppercase"
          />
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-palegoldenrod border-khaki border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                loading="lazy"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="01"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell photo="/photo@2x.png" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="75%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="20%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$50,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-paleturquoise border-aquamarine border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="02"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell photo="/ellipse-121@2x.png" propBorderRadius="50%" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-lightgoldenrodyellow border-yellowgreen border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative object-contain"
                loading="lazy"
                alt=""
                src="/level-down@2x.png"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="03"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell photo="/ellipse-120@2x.png" propBorderRadius="50%" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="04"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/ellipse-120-1@2x.png" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative object-contain"
                alt=""
                src="/level-down@2x.png"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="05"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-1.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-whitesmoke border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch bg-row-styling-default overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative object-contain"
                alt=""
                src="/level-down@2x.png"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="06"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-2.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="07"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-3.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="08"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-4.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative object-contain"
                alt=""
                src="/level-down-3@2x.png"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="09"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-5.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="10"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-6.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative"
                alt=""
                src="/level-up.svg"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="11"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-7.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="$48,000"
            propPadding="1.156rem 0.75rem"
            propWidth1="13.625rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
        </div>
        <RowStylingDefault />
      </div>
      <div className="self-stretch rounded-xl bg-row-styling-default border-gainsboro-100 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start [row-gap:20px] lg:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-center py-[0.937rem] px-[0.812rem] gap-[0.5rem]">
              <img
                className="h-[2.125rem] w-[2.125rem] relative object-contain"
                alt=""
                src="/level-down-4@2x.png"
              />
              <div className="hidden flex-col items-start justify-start">
                <div className="relative leading-[150%]">Primary Text</div>
                <div className="relative text-[0.813rem] leading-[150%] opacity-[0.7]">
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
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="12"
            propPadding="1.156rem 0.75rem"
            propWidth1="4.75rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell1 ellipse120="/photo-8.svg" propBorderRadius="unset" />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="70%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11.5rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2
            propWidth="unset"
            propFlex="unset"
            propMinWidth="unset"
            primaryText="15%"
            propPadding="1.156rem 0.75rem"
            propWidth1="11rem"
            propFontSize="1.125rem"
            propDisplay="flex"
            propAlignSelf="unset"
            propFontWeight="unset"
            propTextTransform="unset"
          />
          <Cell2 primaryText="$48,000" />
        </div>
        <RowStylingDefault />
      </div>
    </div>
  );
};

TableContainer.propTypes = {
  className: PropTypes.string,
};

export default TableContainer;
