import { Cloudinary } from "@cloudinary/url-gen";
import { Dimensions } from "react-native";
import { useEffect, useContext, useState } from "react";
import { View, FlatList } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { getVideos } from "../utils/api";
import CustomUserVideo from "./CustomVideo";
function UserVideos({ navigation }) {
  const { user } = useContext(UserContext);
  const [videos, setVideos] = useState([]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ncapp",
    },
  });
  useEffect(() => {
    getVideos("", "", "", user.username).then(setVideos);
  }, []);
  return (
    <View>
      <FlatList
        snapToInterval={Dimensions.get("window").height - 130}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        keyExtractor={(item) => item.id}
        data={videos.map((video) => {
          return {
            url: cld.video(video.cloudinary_id).toURL(),
            id: video.cloudinary_id,
            votes: video.votes,
            title: video.title,
            created_at: video.created_at,
            description: video.description,
            tags: video.video_tag_array,
          };
        })}
        renderItem={({ item }) => (
          <CustomUserVideo
            item={item}
            navigation={navigation}
            userVideo={true}
            setVideos={setVideos}
          />
        )}
      />
    </View>
  );
}

export default UserVideos;
