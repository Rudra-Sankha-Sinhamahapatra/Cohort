import { useState } from "react";
import "./App.css";
import {
  useRecoilValue,
  RecoilRoot,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationCount,
} from "./atoms/atoms";

function App() {
  return (
    <>
      <RecoilRoot>
        <MyApp />
      </RecoilRoot>
    </>
  );
}

function MyApp() {
  const netWorkNotificationCount = useRecoilValue(networkAtom);
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationCount);
  const renderNot =
    totalNotificationCount >= 99 ? "99+" : totalNotificationCount;

  return (
    <>
      <button>Home</button>
      <button>
        Network(
        {netWorkNotificationCount >= 100 ? "99+" : netWorkNotificationCount})
      </button>
      <button>Jobs({jobsCount >= 100 ? "99+" : jobsCount})</button>
      <button>
        Messaging({messagingCount >= 100 ? "99+" : messagingCount})
      </button>
      <button>
        Notification({notificationCount >= 100 ? "99+" : notificationCount})
      </button>
      <button
        onClick={() => {
          setMessagingCount((messagingCount) => messagingCount + 1);
        }}
      >
        Me({renderNot})
      </button>
      <Apply />
    </>
  );
}

function Apply() {
  const setJobsCount = useSetRecoilState(jobsAtom);

  return (
    <>
      <button
        onClick={() => {
          setJobsCount((jobs) => jobs + 1);
        }}
      >
        Apply Jobs
      </button>
    </>
  );
}
export default App;
