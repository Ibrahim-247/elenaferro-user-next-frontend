export default function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div
        className="animate-spin inline-block size-10 border-3 border-current border-t-transparent rounded-[999px] text-primary"
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
}
