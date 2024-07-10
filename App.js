import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ViroARSceneNavigator, ViroARScene, ViroImage } from '@reactvision/react-viro';

const MyScene = () => {
  return (
    <ViroARScene>
      <ViroImage 
        source={require("./assets/icon.png")}
        position={[0, 0, -1]}
        height={0.5}
        width={0.5}
      />
    </ViroARScene>
  );
}
export default function App() {
  return (
    <ViroARSceneNavigator 
      style={{
        flex: 1
      }}
      autofocus={true}
      initialScene={{
        scene: MyScene
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
