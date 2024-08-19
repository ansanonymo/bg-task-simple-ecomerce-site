function CatalogIcon() {
  return (
    <div className="size-5 grid grid-cols-2 gap-[2px]">
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

function Box() {
  return <div className="border border-2 border-white w-full h-full"></div>;
}

export default CatalogIcon;
