import { memo } from "react";

// memo - запомнить, защитить о ненужных рендеров

export default memo(function Frederika() {
  return <div className="bg-pink-300 border mx-10 my-5">Frederika</div>;
});
