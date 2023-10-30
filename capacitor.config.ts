import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'techbar.users.app',
  appName: 'TechBar',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#ff0000',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: false,
      androidScaleType: 'CENTER_CROP',
      splashImmersive: true,
      backgroundColor: '#ffffff',
    },
  },
};

export default config;
