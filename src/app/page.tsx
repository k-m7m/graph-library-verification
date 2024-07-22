import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/chart-js-sample"}>ChartJsサンプル</Link>
      <br />
      <Link href={"/react-chart-js-sample"}>ReactChartJsサンプル</Link>
      <br />
      <Link href={"/echarts-sample"}>Echartsサンプル</Link>
      <br />
      <Link href={"/apexcharts-sample"}>ApexChartsサンプル</Link>
    </div>
  );
}
