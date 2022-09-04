export const manifest = {
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","css/bulma.min.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","img/1280x960.png","img/WaitingList_Icon.png","img/WaitingList_Logo.svg","img/WaitingList_Placeholder.png","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"immutable/start-d5821fc4.js","imports":["immutable/start-d5821fc4.js","immutable/chunks/index-57f72b05.js","immutable/chunks/index-1c949c0b.js","immutable/chunks/preload-helper-4c397a37.js","immutable/chunks/singletons-cdeec3fd.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/15.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "account",
				pattern: /^\/account\/?$/,
				names: [],
				types: [],
				path: "/account",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "auth",
				pattern: /^\/auth\/?$/,
				names: [],
				types: [],
				path: "/auth",
				shadow: null,
				a: [0,5,6],
				b: [1]
			},
			{
				type: 'page',
				id: "logging-in",
				pattern: /^\/logging-in\/?$/,
				names: [],
				types: [],
				path: "/logging-in",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "manage",
				pattern: /^\/manage\/?$/,
				names: [],
				types: [],
				path: "/manage",
				shadow: () => import('../output/server/entries/endpoints/manage/index.js'),
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/invite.json",
				pattern: /^\/api\/invite\.json$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/invite.json.js')
			},
			{
				type: 'endpoint',
				id: "api/admin.json",
				pattern: /^\/api\/admin\.json$/,
				names: [],
				types: [],
				load: () => import('../output/server/entries/endpoints/api/admin.json.js')
			},
			{
				type: 'page',
				id: "account/password-update",
				pattern: /^\/account\/password-update\/?$/,
				names: [],
				types: [],
				path: "/account/password-update",
				shadow: null,
				a: [0,3,10],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/forgotpassword",
				pattern: /^\/auth\/forgotpassword\/?$/,
				names: [],
				types: [],
				path: "/auth/forgotpassword",
				shadow: null,
				a: [0,5,11],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/resetpassword",
				pattern: /^\/auth\/resetpassword\/?$/,
				names: [],
				types: [],
				path: "/auth/resetpassword",
				shadow: null,
				a: [0,5,12],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signin",
				pattern: /^\/auth\/signin\/?$/,
				names: [],
				types: [],
				path: "/auth/signin",
				shadow: null,
				a: [0,5,13],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/signup",
				pattern: /^\/auth\/signup\/?$/,
				names: [],
				types: [],
				path: "/auth/signup",
				shadow: null,
				a: [0,5,14],
				b: [1]
			},
			{
				type: 'page',
				id: "manage/users",
				pattern: /^\/manage\/users\/?$/,
				names: [],
				types: [],
				path: "/manage/users",
				shadow: () => import('../output/server/entries/endpoints/manage/users.js'),
				a: [0,8,15],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
