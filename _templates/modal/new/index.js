module.exports = {
  prompt: async ({ inquirer }) => {
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter a new modal name',
    });
    if (!name) throw new Error();
    return {
      src: `src/components/modals`,
      name,
    };
  },
};
