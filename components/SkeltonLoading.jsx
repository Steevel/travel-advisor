function SkeltonLoading() {
  return (
    <div>
      <div className="border bg-white shadow rounded-md p-2 w-[187px]">
        <div className="flex flex-col animate-pulse ">
          <div className="rounded-lg bg-slate-200 h-[90px] w-[170px]"></div>
          <div className="flex-1 py-3 space-y-2 ">
            <div className="h-2 rounded bg-slate-200"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 rounded bg-slate-200"></div>
                <div className="h-2 col-span-1 rounded bg-slate-200"></div>
              </div>
              <div className="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeltonLoading;
