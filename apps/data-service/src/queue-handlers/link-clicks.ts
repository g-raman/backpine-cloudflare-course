import { addLinkClick } from '@repo/data-ops/queries/links';
import { LinkClickMessageType } from '@repo/data-ops/zod-schema/queue';

export async function handleLinkClick(_: Env, event: LinkClickMessageType) {
	await addLinkClick(event.data);
}
