import { Tabs } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function TabsLayout() {
  const { styles } = useStyles(stylesheet);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
    </Tabs>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  tabBar: {
    backgroundColor: theme.colors.background,
  },
})); 