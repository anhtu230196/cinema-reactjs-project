import React, { lazy, Suspense } from "react";
import HomeLayout from "./../HomeLayout";
import LoadingPage from "../../components/loading-page/LoadingPage";
const Slider = lazy(() => import("./slider/Slider"));
const MuaVe = lazy(() => import("./mua-ve/MuaVe"));
const PhimComponent = lazy(() => import("./phim/PhimComponent"));
const UngDung = lazy(() => import("./ung-dung/UngDung"));
const HeThongRap = lazy(() => import("./he-thong-rap/HeThongRap"));

function TrangChu() {
  return (
    <HomeLayout fullOptionsHeader>
      <div style={{ paddingTop: 80 }}>
        <Suspense fallback={<LoadingPage />}>
          <Slider />
          <MuaVe />
          <PhimComponent />
          <div className='break-line' id='cumrap'></div>
          <HeThongRap />
          <UngDung />
        </Suspense>
      </div>
    </HomeLayout>
  );
}

export default TrangChu;
