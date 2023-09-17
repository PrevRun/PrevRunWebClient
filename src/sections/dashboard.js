/** @jsx jsx */
import { useRef, useEffect, useState } from "react";
import { rgba } from "polished";
import { jsx, Box, Container } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import TabTitle from "components/tabs/tab-title";
import TabContent from "components/tabs/tab-content";
import Currency from "components/icons/currency";
import LockIcon from "components/icons/cog";
import Suitcase from "components/icons/suitcase";
import BarChart from "components/icons/bar-chart";
import dashboard from "assets/images/app.png";
import optimizeWorkflow from "assets/images/optimizeWorkflow.png";
import uploadVideo from "assets/images/uploadVideo.png";
import security from "assets/images/security.png"

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: "Budget Friendly",
      },
    ],
    tabContent: [
      {
        image: dashboard,
        title: `Save on your Network Bandwidth`,
        description: `Save on your Network Bandwidth with our efficient video collaboration platform. Say goodbye to heavy downloads and enjoy seamless video reviews and approvals. Let's make the most of your bandwidth together!`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <BarChart />,
        title: "Optimize workflow",
      },
    ],
    tabContent: [
      {
        image: optimizeWorkflow,
        title: `Optimize your creator workflow`,
        description: `Optimize Workflow with Prevrun. Our platform simplifies video collaboration, making your content creation process more efficient than ever. Say hello to streamlined editing, approvals, and instant uploads. Elevate your workflow with Prevrun today!`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <Suitcase />,
        title: "Upload videos haslefree",
      },
    ],
    tabContent: [
      {
        image: uploadVideo,
        title: `Upload your videos from anywhere`,
        description: `Video uploading shouldn't mean waiting and staring at the screen. With Prevrun, simply approve your video, click upload, shut down your laptop, and the next time you open it, your video could have racked up millions of views. It's like magic for your content!`,
        readMore: "#introduce-quality",
      },
    ],
  },

  {
    id: 4,
    tabPane: [
      {
        icon: <LockIcon />,
        title: "Safety first",
      },
    ],
    tabContent: [
      {
        image: security,
        title: `Ultra Fast Ultra Safe`,
        description: `No need for YouTube keys or any other credentials—PrevRun is as secure as it gets. We use OAuth 2.0 to ensure your safety while you focus on creating amazing content. Your security is our priority.`,
        readMore: "#introduce-quality",
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 20, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: "#353448",
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ["none !important"],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: "white",
    ".rc-tabs-nav": {
      mb: [8, null, null, 7, 10, null, 12],
    },
    ".rc-tabs-nav-wrap": {
      "::before": {
        backgroundColor: rgba("#fff", 0.1),
        content: ["none", null, null, `''`],
        height: 1,
        position: "absolute",
        left: 0,
        top: 51,
        width: "100%",
      },
      "::after": {
        borderColor: ["primary"],
      },
    },
    ".rc-tabs-nav-list": {
      display: ["flex"],
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      "+ .rc-tabs-tab": {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      "svg g, svg path": {
        transition: "0.3s ease-in-out 0s",
      },
    },
    ".rc-tabs-tab-btn": {
      alignItems: "center",
      display: ["flex", null, null, "block"],
      outline: "0 none",
      fontSize: [null, null, null, 15, 2],
    },
    ".rc-tabs-tab-active": {
      "svg g, svg path": {
        fill: "primary",
        opacity: 1,
      },
      h5: {
        color: "primary",
      },
    },
    ".rc-tabs-ink-bar": {
      backgroundColor: "primary",
      borderRadius: 5,
      bottom: [47],
      display: ["none", null, null, "block"],
    },
    ".rc-tabs-tabpane": {
      outline: "0 none",
    },
  },
};
