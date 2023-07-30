const backend = {
	require: ['./tests/app/backend/features/step_definitions/*.steps.ts'],
	paths: ['./tests/app/backend/features/**/*.feature'],
	requireModule:['ts-node/register'],
	publishQuiet: true,
}

module.exports = {
	backend
};
