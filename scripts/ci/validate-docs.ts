import execa from 'execa';

(async () => {
  await execa('yarn', ['generate:docs']);
  const { stdout } = await execa('git', ['diff --name-only']);

  console.log(stdout);
})();
