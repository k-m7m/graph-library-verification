"use client";
import { useEffect, useRef } from "react";

import * as echarts from "echarts";

export default function EchartsSample() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;

    if (!ctx) return;

    var myChart = echarts.init(ctx);

    myChart.setOption({
      title: {
        text: "ECharts Getting Started Example",
      },
      tooltip: {},
      xAxis: {
        data: ["shirt", "cardigan", "chiffon", "pants", "heels", "socks"],
      },
      yAxis: {},
      series: [
        {
          name: "sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, []);

  return <div ref={chartRef} style={{ width: 600, height: 400 }}></div>;
}
