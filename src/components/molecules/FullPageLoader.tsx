import { Spinner } from "../atoms";

export const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
      <Spinner />
    </div>
  );
};
