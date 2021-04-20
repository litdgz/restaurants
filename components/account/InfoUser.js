import React, {useState} from "react";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { uploadImage, updateProfile } from "../../utils/actions";
import { loadImageFromGallery } from "../../utils/helpers";

const InfoUser = ({ user, setLoading, setLoadingText }) => {
  const [photoUrl, setPhotoUrl] = useState(user.photoURL);

  const changePhoto = async () => {
    const result = await loadImageFromGallery([1, 1]);
    if (!result.status) {
      return;
    }
    setLoadingText("Actualizando Imagen...");
    setLoading(true);
    const resultUploadImage = await uploadImage(
      result.image,
      "avatars",
      user.uid
    );
    console.log(resultUploadImage)
    if (!resultUploadImage.statusResponse) {
      setLoading(false);
      Alert.alert("Ha ocurrido un error al almacenar la foto de perfil.");
      return;
    }
    const resultUpdateProfile = await updateProfile({
      photoURL: resultUploadImage.url
    });
    setLoading(false);
    if (resultUpdateProfile.statusResponse) {
      setPhotoUrl(resultUploadImage.url);
    } else {
      Alert.alert("Ha ocurrido un erro al actualizar la foto de perfil.");
    }
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded={true}
        size="large"
        onPress={() => changePhoto()}
        source={
          photoUrl
            ? { uri: photoUrl }
            : require("../../assets/avatar-default.jpg")
        }
      />
      <View style={styles.infoUser}>
        <Text style={styles.displayName}>
          {user.displayName ? user.displayName : "Anonimo"}
        </Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
};

export default InfoUser;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingVertical: 30,
  },
  infoUser: {
    marginLeft: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
