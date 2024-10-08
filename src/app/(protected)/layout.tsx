const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-neutral-900">
      {children}
    </div>
  );
};

export default layout;
