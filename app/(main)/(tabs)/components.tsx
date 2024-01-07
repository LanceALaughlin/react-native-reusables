import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * @excludes the following components:
 * Scrollarea (use `ScrollView` instead)
 * Sheet (use BottomSheet or  Drawer from 'expo-router/drawer' instead)
 */
export default function Components() {
  const insets = useSafeAreaInsets();
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-foreground text-xl'>Comming soon...</Text>
    </View>
  );
}
