// Format Định dạng Trailer Youtube
export const getTrailerId = (string) => {
  // muốn mở đc modal trailer thì phải đúng định dạng embed/${videoId}
  const splitFirst = string.split("=")[1];
  // đúng định dạng embed/${videoId}
  if (!splitFirst) {
    return string.split("/").pop(); //pop() để lấy element cuối của mảng
  }
  // watch?v=qgb-bdEEI-M&t=1s
  if (splitFirst.split("&")[0]) return splitFirst.split("&")[0];
  return splitFirst;
};

// Format Currency VND
export const formatCurrency = (soTien) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(soTien);
};

// Style màu cho các cụm rạp
export const getColorCinema = (tenCumRap) => {
  let determineColor = { color: "" };
  switch (tenCumRap.split(" ")[0]) {
    case "BHD":
      return { ...determineColor, color: "#76c044" };
    case "CGV":
      return { ...determineColor, color: "#ee2d24" };
    case "CNS":
      return { ...determineColor, color: "#a46ad0" };
    case "GLX":
      return { ...determineColor, color: "#ff7a00" };
    case "Lotte":
      return { ...determineColor, color: "#ed1b24" };
    case "MegaGS":
      return { ...determineColor, color: "#ffd62f" };
    default:
      return {};
  }
};
