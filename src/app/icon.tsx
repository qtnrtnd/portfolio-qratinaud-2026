import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Monogram favicon — coral square with the "q" of quent.in.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e8623d",
          color: "#1f1f1d",
          fontSize: 24,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        q
      </div>
    ),
    size,
  );
}
