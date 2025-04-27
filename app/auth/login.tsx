import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'themes';

export default function LoginScreen() {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
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
  text: {
    color: theme.colors.text,
    fontSize: 20,
  },
})); 