"use client";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";
import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
import { useEffect, useRef } from "react";

Chart.register(...registerables, CandlestickElement, CandlestickController);

export default function ChartJsSample() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (!ctx) return;

    // サンプルのローソク足データ
    const barData = [
      {
        x: 1718640000000,
        o: 2044.3,
        h: 2053.2,
        l: 2032.0,
        c: 2036.5,
      },
      {
        x: 1718726400000,
        o: 2036.0,
        h: 2041.4,
        l: 2018.8,
        c: 2032.0,
      },
      {
        x: 1718812800000,
        o: 2021.7,
        h: 2031.5,
        l: 2012.9,
        c: 2022.2,
      },
      {
        x: 1718899200000,
        o: 2035.0,
        h: 2058.1,
        l: 2034.5,
        c: 2048.3,
      },
      {
        x: 1719158400000,
        o: 2065.0,
        h: 2077.8,
        l: 2058.6,
        c: 2068.4,
      },
      {
        x: 1719244800000,
        o: 2073.8,
        h: 2097.9,
        l: 2069.4,
        c: 2096.9,
      },
      {
        x: 1719331200000,
        o: 2095.0,
        h: 2097.4,
        l: 2084.6,
        c: 2092.5,
      },
      {
        x: 1719417600000,
        o: 2080.0,
        h: 2092.0,
        l: 2072.5,
        c: 2086.0,
      },
      {
        x: 1719504000000,
        o: 2090.5,
        h: 2096.0,
        l: 2067.0,
        c: 2073.0,
      },
      {
        x: 1719763200000,
        o: 2089.0,
        h: 2092.0,
        l: 2081.0,
        c: 2090.5,
      },
      {
        x: 1719849600000,
        o: 2098.0,
        h: 2099.5,
        l: 2082.0,
        c: 2087.5,
      },
      {
        x: 1719936000000,
        o: 2094.5,
        h: 2100.0,
        l: 2078.0,
        c: 2096.5,
      },
      {
        x: 1720022400000,
        o: 2095.0,
        h: 2102.0,
        l: 2088.0,
        c: 2098.0,
      },
      {
        x: 1720108800000,
        o: 2100.0,
        h: 2102.5,
        l: 2081.5,
        c: 2084.0,
      },
      {
        x: 1720368000000,
        o: 2091.5,
        h: 2102.0,
        l: 2087.0,
        c: 2095.5,
      },
      {
        x: 1720454400000,
        o: 2095.5,
        h: 2108.0,
        l: 2083.5,
        c: 2104.5,
      },
      {
        x: 1720540800000,
        o: 2110.0,
        h: 2128.0,
        l: 2098.5,
        c: 2126.5,
      },
      {
        x: 1720627200000,
        o: 2141.0,
        h: 2164.0,
        l: 2136.0,
        c: 2159.5,
      },
      {
        x: 1720713600000,
        o: 2140.0,
        h: 2163.0,
        l: 2135.0,
        c: 2147.5,
      },
      {
        x: 1720972800000,
        o: 2138.0,
        h: 2138.0,
        l: 2108.0,
        c: 2108.0,
      },
      {
        x: 1721059200000,
        o: 2109.0,
        h: 2129.0,
        l: 2102.5,
        c: 2124.0,
      },
      {
        x: 1721145600000,
        o: 2127.5,
        h: 2161.5,
        l: 2126.0,
        c: 2155.0,
      },
    ];

    const chart = new Chart(ctx, {
      type: "candlestick",
      data: {
        datasets: [
          {
            label: "CHRT - Chart.js Corporation",
            data: barData,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
          },
          y: {
            beginAtZero: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "800px", height: "500px" }}>
      <h1>Candlestick Chart</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
