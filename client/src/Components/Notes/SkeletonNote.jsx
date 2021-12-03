import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function SkeletonNote() {
  return (
    <div className="note-skeleton"  >
    <Stack spacing={0}>
      <Skeleton variant="text" width={230} height={30} />
      <Skeleton variant="rectangular" width={230} height={118}></Skeleton>
    </Stack>
    </div>
  );
}
