const Shimmer = () => {
  return (
    <>
      <div className="body">
        {Array(15)
          .fill("")
          .map((e) => {
            return <div id="shimmer-card"></div>;
          })}
      </div>
    </>
  );
};

export default Shimmer;
