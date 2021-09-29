module.exports = {
  prompt: async ({ inquirer }) => {
    const { name } = await inquirer.prompt({
      type: 'input',
      name: 'name',
      message: 'Enter a hoc name',
    });
    if (!name) throw new Error();
    return {
      src: `src/components/hoc/${name}`,
      name,
    };
  },
};
