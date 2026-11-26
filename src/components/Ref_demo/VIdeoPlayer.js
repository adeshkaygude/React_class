import React, { useRef, useState } from "react";
import { Container, Card, Stack, Button } from "@mui/material";

const VideoPlayer = ({ src }) => {
  const [state, setState] = useState("stop");

  // Video element access करण्यासाठी useRef
  const videoRef = useRef(null);

  // Video Play
  const play = () => {
    videoRef.current.play();
    setState("play");
  };

  // Video Pause
  const pause = () => {
    videoRef.current.pause();
    setState("pause");
  };

  // Video Stop
  const stop = () => {
    const video = videoRef.current;

    video.pause();
    video.currentTime = 0;

    setState("stop");
  };

  return (
    <Container>
      {/* Video Element */}
      <video
        src={src}
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        onEnded={() => setState("stop")}
      />

      {/* Video Controls */}
      <Card sx={{ padding: 2 }}>
        <Stack direction="row" spacing={2}>
          <Button onClick={play} variant="contained">
            Play
          </Button>

          <Button onClick={pause} variant="contained" color="warning">
            Pause
          </Button>

          <Button onClick={stop} variant="contained" color="error">
            Stop
          </Button>
        </Stack>
      </Card>

      {/* Current Video Status */}
      <p>Current Status: {state}</p>
    </Container>
  );
};

export default VideoPlayer;
