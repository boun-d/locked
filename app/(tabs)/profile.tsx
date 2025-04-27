import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export default function ProfileScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
})); 