export default function CodeViewer({ data }: any) {
  return (
    <>
      <code>{data?.children[0]}</code>
    </>
  );
}
