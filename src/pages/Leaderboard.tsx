import FrameComponent from "../components/FrameComponent";
import TableContainer from "../components/TableContainer";
import GroupComponent from "../components/GroupComponent";
import FrameComponent1 from "../components/FrameComponent1";

const Leaderboard = () => {
  return (
    <div className="w-full relative bg-row-styling-default overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] mq1050:pl-[1.25rem] mq1050:pr-[1.25rem] mq1050:box-border">
      <FrameComponent />
      <section className="w-[69.375rem] !m-[0] absolute right-[2.813rem] bottom-[5.688rem] shadow-[0px_1px_6px_rgba(187,_187,_187,_0.3)] rounded-xl bg-row-styling-default border-gainsboro-200 border-[0.5px] border-solid box-border flex flex-col items-end justify-start pt-[8.062rem] px-[1.812rem] pb-[2.375rem] gap-[2.125rem] max-w-full text-left text-[0.75rem] text-gray-200 font-row-primary-text">
        <TableContainer />
        <div className="flex flex-row items-start justify-start gap-[0.556rem]">
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem] font-poppins">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`<`}</div>
          </div>
          <div className="flex-1 rounded bg-chocolate border-chocolate border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem] text-center text-row-styling-default">
            <div className="relative leading-[100%] font-semibold">1</div>
          </div>
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem]">
            <div className="relative tracking-[-0.01em] leading-[100%] font-semibold">
              2
            </div>
          </div>
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem]">
            <div className="relative tracking-[-0.01em] leading-[100%] font-semibold">
              3
            </div>
          </div>
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem]">
            <div className="relative tracking-[-0.01em] leading-[100%] font-semibold">
              4
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] text-black font-poppins">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">
              ...
            </div>
          </div>
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem]">
            <div className="relative tracking-[-0.01em] leading-[100%] font-semibold">
              40
            </div>
          </div>
          <div className="flex-1 rounded bg-row-styling-default border-row-styling-default border-[1px] border-solid flex flex-row items-start justify-start py-[0.375rem] px-[0.5rem] font-poppins">
            <div className="relative tracking-[-0.01em] leading-[100%] font-medium">{`>`}</div>
          </div>
        </div>
      </section>
      <section className="flex-1 flex flex-col items-start justify-start gap-[1.875rem] max-w-[calc(100%_-_241px)] mq1050:max-w-full">
        <GroupComponent />
        <FrameComponent1 />
      </section>
    </div>
  );
};

export default Leaderboard;
