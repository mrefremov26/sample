module.exports = {
  prompt: async ({ inquirer }) => {
    const { featureName } = await inquirer.prompt({
      type: 'input',
      name: 'featureName',
      message: 'Enter a feature name',
    });
    if (!featureName) throw new Error('Feature name is required!');
    const { featureComponentType } = await inquirer.prompt({
      type: 'select',
      name: 'featureComponentType',
      choices: ['component', 'container'],
      message: 'What type component should be in this feature?',
    });
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter a component name',
    });
    if (!name) throw new Error('Name is required!');
    return {
      featureName,
      src: `src/components/features/${featureName}/${featureComponentType}s/${name}`,
      renderAtomsAndStorybook: featureComponentType === 'component',
      renderTests: featureComponentType === 'component',
      name,
    };
  },
};
