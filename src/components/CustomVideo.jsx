import { Video } from "expo-av";
import styles from "../styles/Styles";
import Likes from "./Likes";
import * as React from "react";
import { useState } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import CustomButton from "./CustomButton";
import { deleteVideo } from "../utils/api";
export default function CustomUserVideo({
  item,
  navigation,
  userVideo,
  setVideos,
}) {
  const videoref = React.useRef(null);
  const [playing, setPlaying] = useState(true);

  function onPlayPausePress() {
    if (playing) {
      videoref.current.pauseAsync();
      setPlaying(!playing);
    } else {
      videoref.current.playAsync();
      setPlaying(!playing);
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPlayPausePress();
      }}
    >
      <View
        style={userVideo ? styles.userVideoContainer : styles.videoContainer}
      >
        <Video
          style={styles.video}
          source={{
            uri: item.url,
          }}
          resizeMode="stretch"
          isLooping
          useNativeControls={false}
          ref={videoref}
        />
        <View style={styles.videoInfo}>
          <Text style={styles.videoTitle}>{item.title}</Text>

          <Text style={styles.videoInfoText}>{item.description}</Text>
          <Text style={styles.videoInfoText}>
            {new Date(item.created_at).toLocaleDateString()}
          </Text>
          <Text style={styles.videoInfoText}>
            {item.tags.map((tag) => tag + "  ")}
          </Text>
          {userVideo ? (
            <CustomButton
              title="Delete"
              onPress={() => {
                deleteVideo(item.id).then(() => {
                  setVideos((currentVideos) => {
                    return currentVideos.filter((video) => {
                      return video.cloudinary_id !== item.id;
                    });
                  });
                });
              }}
            />
          ) : (
            <></>
          )}

          <Likes item={item} navigation={navigation} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
