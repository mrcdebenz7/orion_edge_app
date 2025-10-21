export type Preferences = {
  theme: 'system' | 'light' | 'dark';
  density: 'comfortable' | 'compact';
  showDevTools: boolean;
  hiddenTools: string[];
}

export const defaultPreferences: Preferences = {
  theme: 'system',
  density: 'comfortable',
  showDevTools: process.env.NODE_ENV !== 'production',
  hiddenTools: process.env.NODE_ENV === 'production' 
    ? ['mock-bot', 'debug-console', 'seed-data'] 
    : []
}

export const isToolVisible = (id: string, p: Preferences = defaultPreferences) => !p.hiddenTools.includes(id)
