import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.suspiciouslycool.stuff',
  appName: 'stuff',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
