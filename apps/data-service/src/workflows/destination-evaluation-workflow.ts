import { WorkerEntrypoint, WorkflowEvent, WorkflowStep } from 'cloudflare:workers';

export class DestinationEvaluationWorkflow extends WorkerEntrypoint<Env, unknown> {
	async run(event: Readonly<WorkflowEvent<unknown>>, step: WorkflowStep) {
		const collectedData = await step.do('renderd-destination-page-data', async () => {
			return {
				data: 'dummy-data',
			};
		});

		console.log(collectedData);
	}
}
