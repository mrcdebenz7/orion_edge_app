/**
 * UI/Dev Preferences
 * - Default theme/layout knobs for the site
 * - Dev-only tool filters (hide in production)
 */
export type Preferences = {
  theme: 'system'|'light'|'dark';
  density: 'comfortable'|'compact';
  showDevTools: boolean;
  hiddenTools: string[];   // tool IDs hidden in this runtime
}

export const defaultPreferences: Preferences = {
  theme: 'system',
  density: 'comfortable',
  showDevTools: process.env.NODE_ENV !== 'production',
  hiddenTools: process.env.NODE_ENV === 'production'
    ? ['mock-bot', 'debug-console', 'seed-data']
    : []
};

export function isToolVisible(id: string, prefs: Preferences = defaultPreferences) {
  return !prefs.hiddenTools.includes(id);
}
