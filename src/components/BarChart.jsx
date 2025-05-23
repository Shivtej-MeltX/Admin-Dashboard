import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../Data/mockData";
import { tokens } from "../theme";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[500],
          },
        },
        tooltip: {
          container: {
            color: colors.grey[500],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      axisBottom={{
        legend: isDashboard ? undefined : "country",
        legendOffset: 32,
      }}
      axisLeft={{ legend: isDashboard ? undefined : "food", legendOffset: -40 }}
      enableLabel={false}
      labelSkipWidth={5}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          translateX: 120,
          itemsSpacing: 3,
          itemWidth: 100,
          itemHeight: 16,
        },
      ]}
    />
  );
};

export default BarChart;
