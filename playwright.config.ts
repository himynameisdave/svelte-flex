import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	//	Uncomment this to enable headful browser, useful for debugging.
	// use: {
	// 	headless: false,
	// },
};

export default config;
