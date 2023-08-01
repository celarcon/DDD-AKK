const backend = {
	require: ['./tests/features/step_definitions/*.steps.ts'],
	paths: ['./tests/features/**/*.feature'],
	requireModule: ['ts-node/register'],
	publishQuiet: true,
}

module.exports = {
	backend,
}
