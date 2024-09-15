import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`bg-row-styling-default border-gainsboro-300 border-[1px] border-solid flex flex-col items-start justify-start pt-[4.75rem] px-[0rem] pb-[85.437rem] gap-[0.187rem] text-left text-[1rem] text-black font-row-primary-text lg:pt-[3.063rem] lg:pb-[55.563rem] lg:box-border mq750:pt-[1.313rem] mq750:pb-[23.5rem] mq750:box-border mq1050:hidden mq1050:pt-[2rem] mq1050:pb-[36.125rem] mq1050:box-border ${className}`}
    >
      <div className="self-stretch h-[117.688rem] relative bg-row-styling-default border-gainsboro-300 border-r-[1px] border-solid box-border hidden" />
      <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
        <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/dashboard3appapplicationdashboardhomelayoutvertical.svg"
          />
        </div>
        <a className="[text-decoration:none] relative text-[inherit] z-[1]">
          Dashboard
        </a>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.906rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem]">
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.5rem] gap-[1.25rem] z-[1]">
            <div className="self-stretch w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
            <div className="ml-[-1.813rem] self-stretch w-[0.563rem] relative rounded bg-chocolate z-[2]" />
            <Button
              className="h-[3.125rem] w-[12rem] z-[2]"
              startIcon={
                <img
                  width="16px"
                  height="16px"
                  src="/graphbarincreaseupproductperformanceincreasearrowgraphbusinesschart.svg"
                />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#ff9040",
                borderRadius: "6px",
                "&:hover": { background: "#ff9040" },
                width: 192,
                height: 50,
              }}
            >
              Leaderboard
            </Button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
              <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
              <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/crownrewardsocialratingmediaqueenvipkingcrown.svg"
                />
              </div>
              <div className="flex-1 relative z-[1]">Past Winners</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
                <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/walletmoneypaymentfinancewallet.svg"
                  />
                </div>
                <div className="flex-1 relative z-[1]">Wallets</div>
              </div>
              <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
                <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/subscriptioncashflow.svg"
                  />
                </div>
                <div className="flex-1 relative z-[1]">Subscription</div>
              </div>
              <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
                <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/useraddplusactionsaddclosegeometrichumanpersonplussingleupuser.svg"
                  />
                </div>
                <div className="relative inline-block min-w-[7.438rem] z-[1]">
                  Referral Program
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch h-[0.063rem] relative max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/divider.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[2]">
            <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/cogworkloadingcoggearsettingsmachine.svg"
              />
            </div>
            <a className="[text-decoration:none] flex-1 relative text-[inherit] z-[1]">
              Settings
            </a>
          </div>
          <div className="self-stretch bg-row-styling-default flex flex-row items-start justify-start pt-[1rem] px-[2.75rem] pb-[1.062rem] gap-[1rem] z-[1]">
            <div className="h-[3.125rem] w-[15rem] relative bg-row-styling-default hidden opacity-[0] mix-blend-normal" />
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1rem] h-[1rem] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/logout1arrowexitframeleavelogoutrectangleright.svg"
              />
            </div>
            <div className="flex-1 relative z-[1]">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
