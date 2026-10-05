// Renders a headline with its closing full stop in the brand orange, the single
// accent a headline carries. Text without a trailing full stop is returned as-is.
export default function AccentStop({ text }: { text: string }) {
  if (!text.endsWith('.')) return <>{text}</>;
  return (
    <>
      {text.slice(0, -1)}
      <span className="text-accent">.</span>
    </>
  );
}
