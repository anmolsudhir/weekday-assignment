import { Grid, Skeleton } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

const JobCardSkeleton = forwardRef(
  ({ nCards }: { nCards: number }, ref?: ForwardedRef<HTMLDivElement>) => {
    if (!nCards) return <></>;
    return (
      <>
        <Grid
          ref={ref}
          id="observer"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "640px",
          }}
          item
          xs={12}
          md={6}
          lg={4}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            height={"100%"}
            width={"100%"}
          />
        </Grid>
        {Array.from({ length: nCards - 1 }).map((_val, idx: number) => (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "640px",
            }}
            key={idx}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <Skeleton
              variant="rounded"
              animation="wave"
              height={"100%"}
              width={"100%"}
            />
          </Grid>
        ))}
      </>
    );
  },
);

export default JobCardSkeleton;
