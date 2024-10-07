import { fileURLToPath } from 'url';
import type { Load } from '@sveltejs/kit';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { GUIDES } from '$lib/guides';

export interface GuideLoadResponse {
	content: string | null;
	path?: string;
	name?: string;
	guides: {
		path: string;
		name: string;
	}[];
}

export const load: Load = ({ params }) => {
	const { guide } = params;

	if (guide === undefined)
		return {
			content: null
		};

	const isVercel = process.env.VERCEL === '1' || false;

	let response: GuideLoadResponse = {
		content: null,
		guides: []
	};

	for (const g of GUIDES) {
		if (g.path === guide) {
			const __filename = fileURLToPath(import.meta.url);
			const __dirname = dirname(__filename);
			let content = null;

			if (isVercel) {
				const guidesPath = resolve(__dirname, '..', '..', '..', '..', 'client', 'guides');
				content = readFileSync(resolve(guidesPath, g.file), 'utf8');
			} else {
				const guidesPath = resolve(__dirname, '..', '..', '..', 'static', 'guides');
				content = readFileSync(resolve(guidesPath, g.file), 'utf8');
			}

			response = {
				content,
				path: g.path,
				name: g.name,
				guides: response.guides
			};
		}

		response.guides.push({
			name: g.name,
			path: g.path
		});
	}

	return response;
};
