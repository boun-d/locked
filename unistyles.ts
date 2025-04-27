import { UnistylesRegistry } from 'react-native-unistyles'
import { breakpoints } from './breakpoints'
import { light, dark, active } from './themes'

type AppBreakpoints = typeof breakpoints
type AppThemes = {
  light: typeof light
  dark: typeof dark
  active: typeof active
}

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
  .addThemes({
    light,
    dark,
    active,
  })
  .addConfig({
    adaptiveThemes: true,
    initialTheme: 'light',
  });