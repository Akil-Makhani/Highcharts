
const engagementMessageOverTimeChartOptions = ({ messageCountList, channels }) => {
    // Data processing and Highcharts options generation
    const categories = messageCountList.map(message => message.timeBucket);
    const seriesData = channels.map(channel => {
      const channelId = channel.value;
      const data = messageCountList
        .filter(message => message.channelId === channelId)
        .map(message => parseInt(message.count));
      return { name: channel.label, data, type: 'spline' }; // Set the type to 'spline' for a curve graph
    });
  
    // Highcharts options object
    const options = {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Engagement Over Time',
      },
      xAxis: {
        categories,
        type: 'datetime', // Set the xAxis type to 'datetime' for date-based xAxis
        labels: {
          // Use 'date/month name' format for labels
          formatter: function () {
            const date = new Date(this.value);
            const day = date.getUTCDate();
            const month = date.toLocaleString('default', { month: 'short' });
            return `${day}/${month}`;
          },
        },
        title: {
          text: 'Date',
        },
      },
      yAxis: {
        title: {
          text: 'Message Count',
        },
      },
      series: seriesData,
      tooltip: {
        useHTML: true, // Allow using HTML in the tooltip
        formatter: function () {
          const channelLabel = this.series.name;
          const date = new Date(this.x);
          const day = date.getUTCDate();
          const month = date.toLocaleString('default', { month: 'short' });
          const count = this.y;
          
          return `
            <b>${channelLabel}</b><br>
            ${count} message on ${day} ${month}
          `;
        },
      },
    };
  
    return options;
  };
  
  export default { engagementMessageOverTimeChartOptions };
  