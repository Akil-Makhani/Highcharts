import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import EngagementHelper from './EngagementHelper';

const EngagementChart = () => {
  const [data, setData] = useState({});

  // Step 4: Fetch data (You can replace this with your actual API call or data source)
  useEffect(() => {
    // Simulating fetching data (replace this with your actual data retrieval method)
    const fetchData = () => {
      // Sample data, replace with your actual data
      const mockMessageCountList = [
        {
          "count": "1",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1030088402701385838"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1030087559621136424"
        },
        {
          "count": "2",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1030037314241564732"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1029808623901233182"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1029806377952088074"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1029806106744193067"
        },
        {
          "count": "13",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "1029805353019375616"
        },
        {
          "count": "5",
          "timeBucket": "2022-10-10T00:00:00.000Z",
          "channelId": "825030076239577109"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-17T00:00:00.000Z",
          "channelId": "825030076239577109"
        },
        {
          "count": "2",
          "timeBucket": "2022-10-24T00:00:00.000Z",
          "channelId": "1034437865909780580"
        },
        {
          "count": "4",
          "timeBucket": "2022-10-24T00:00:00.000Z",
          "channelId": "1034434108241219645"
        },
        {
          "count": "3",
          "timeBucket": "2022-10-24T00:00:00.000Z",
          "channelId": "825030076239577109"
        },
        {
          "count": "1",
          "timeBucket": "2022-10-31T00:00:00.000Z",
          "channelId": "1037057875543076974"
        }
      ];

      const mockChannels = [
        {
          "label": "Text Channels",
          "value": "825030075794587692",
          "type": 4,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": null,
          "permissionOverwrites": [
      
          ],
          "id": "825030075794587692",
          "name": "Text Channels",
          "rawPosition": 0,
          "createdTimestamp": 1616772898387
        },
        {
          "label": "Voice Channels",
          "value": "825030076239577108",
          "type": 4,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": null,
          "permissionOverwrites": [
      
          ],
          "id": "825030076239577108",
          "name": "Voice Channels",
          "rawPosition": 0,
          "createdTimestamp": 1616772898493
        },
        {
          "label": "general",
          "value": "825030076239577109",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
      
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "825030076239577109",
          "name": "general",
          "rawPosition": 0,
          "topic": null,
          "lastMessageId": "1034437862151696414",
          "rateLimitPerUser": 0,
          "createdTimestamp": 1616772898493
        },
        {
          "label": "General",
          "value": "825030076239577111",
          "type": 2,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030076239577108",
          "permissionOverwrites": [
      
          ],
          "messages": [
      
          ],
          "nsfw": false,
          "id": "825030076239577111",
          "name": "General",
          "rawPosition": 0,
          "rtcRegion": null,
          "bitrate": 64000,
          "userLimit": 0,
          "videoQualityMode": null,
          "lastMessageId": null,
          "rateLimitPerUser": 0,
          "createdTimestamp": 1616772898493
        },
        {
          "label": "csgo",
          "value": "825030110088396860",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
      
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "825030110088396860",
          "name": "csgo",
          "rawPosition": 1,
          "topic": "This is a good place to talk about csgo",
          "lastMessageId": "1019286026776236062",
          "rateLimitPerUser": 0,
          "createdTimestamp": 1616772906563
        },
        {
          "label": "priv",
          "value": "1000123565594648677",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
            "1018105887564509254",
            "825030075794587691",
            "1000083013318758461",
            "1017825278124380280"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1000123565594648677",
          "name": "priv",
          "rawPosition": 2,
          "topic": null,
          "lastMessageId": null,
          "rateLimitPerUser": 0,
          "createdTimestamp": 1658518439435
        },
        {
          "label": "another",
          "value": "1000124143808827412",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
            "1000083013318758461",
            "825030075794587691"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1000124143808827412",
          "name": "another",
          "rawPosition": 3,
          "topic": null,
          "lastMessageId": null,
          "rateLimitPerUser": 0,
          "createdTimestamp": 1658518577292
        },
        {
          "label": "aa",
          "value": "1000124520604115125",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
            "825030075794587691",
            "1017825278124380280"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1000124520604115125",
          "name": "aa",
          "rawPosition": 4,
          "topic": null,
          "lastMessageId": null,
          "rateLimitPerUser": 0,
          "createdTimestamp": 1658518667127
        },
        {
          "label": "ss",
          "value": "1000125215508017323",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": "825030075794587692",
          "permissionOverwrites": [
            "1000083151047102514",
            "825030075794587691",
            "1018105887564509254"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1000125215508017323",
          "name": "ss",
          "rawPosition": 7,
          "topic": null,
          "lastMessageId": "1000143011751153755",
          "rateLimitPerUser": 0,
          "createdTimestamp": 1658518832805
        },
        {
          "label": "collabland-config",
          "value": "1001114706238521374",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": null,
          "permissionOverwrites": [
            "825030075794587691",
            "1001114703717736489"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1001114706238521374",
          "name": "collabland-config",
          "rawPosition": 8,
          "topic": null,
          "lastMessageId": "1013123227733725345",
          "rateLimitPerUser": 2,
          "createdTimestamp": 1658754745779
        },
        {
          "label": "collabland-join",
          "value": "1001114709375844382",
          "type": 0,
          "guild": "825030075794587691",
          "guildId": "825030075794587691",
          "parentId": null,
          "permissionOverwrites": [
            "1001114703717736489",
            "825030075794587691"
          ],
          "messages": [
      
          ],
          "threads": [
      
          ],
          "nsfw": false,
          "id": "1001114709375844382",
          "name": "collabland-join",
          "rawPosition": 9,
          "topic": null,
          "lastMessageId": "1001151321140904056",
          "rateLimitPerUser": 2,
          "createdTimestamp": 1658754746527
        }
      ];

      setData({ messageCountList: mockMessageCountList, channels: mockChannels });
    };

    fetchData();
  }, []);

  // Step 5: Create a new data structure combining messageCountList and channels based on channelId
  const combinedData = data.messageCountList?.map(message => {
    const channel = data.channels.find(channel => channel.value === message.channelId);
    return { ...message, channel };
  });

  // Step 6: Filter channels with messages on multiple dates
  const channelData = data.channels?.filter(channel => {
    const channelId = channel.value;
    return combinedData?.some(message => message.channelId === channelId);
  });

  // Step 7: Check if data is available before rendering the chart
  if (!data.messageCountList || !data.channels) {
    return <div>Loading...</div>;
  }

  // Step 8: Generate chart options and render the chart
  const options = EngagementHelper.engagementMessageOverTimeChartOptions({
    messageCountList: combinedData,
    channels: channelData,
  });

  return (
    <div>
      <h1>Engagement Chart</h1>
      <div>
        {/* Render the HighchartsReact component with the chart options */}
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default EngagementChart;
