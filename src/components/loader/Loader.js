import React from "react";
import { Grid } from "react-loader-spinner";
function Loader() {
  return (
    <div className="flex justify-center w-full">
      <Grid color="#FDC913" width={50} height={50} />
    </div>
  );
}

export default Loader;
