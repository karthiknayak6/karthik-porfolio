import React from "react";
import { BallTriangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" rounded-lg p-4 flex items-center justify-center">
        <BallTriangle
          height={60}
          width={60}
          radius={5}
          color="#b56e8a"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
}
