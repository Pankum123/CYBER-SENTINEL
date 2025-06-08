import React from "react";
import Chart from "../components/Chart";
import Location from "../components/Location";
import PlatformStatsTable from "./PlatformStatsTable";
import TopUsersCard from "../components/TopUsersCard";
import UserTable from "../components/UserTable";

function ShowResult() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 p-4">
        <div className="mt-13 md:flex justify-between space-y-10 md:space-y-0 ">
          <Chart />
          <Location />
        </div>

        <div className="mt-13 md:flex md:justify-between space-y-10 md:space-y-0 ">
          <PlatformStatsTable />
          <TopUsersCard />
        </div>

        <UserTable />
      </div>
    </>
  );
}

export default ShowResult;
