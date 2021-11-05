import execa from 'execa';
import { setFailed } from '@actions/core';

// This script is meant to only run in CI/GHA.
// It is used to check whether the documentation is updated or not.
(async () => {
  await execa('yarn', ['generate:docs']);
  const { stdout } = await execa('git', ['diff', '--name-only']);

  const arrayOfDirs = stdout.split('\n');
  const hasApiDocsChanges = arrayOfDirs.find((dir) => dir.startsWith('api'));

  if (hasApiDocsChanges) {
    // Reference: https://docs.github.com/en/actions/creating-actions/setting-exit-codes-for-actions#setting-a-failure-exit-code-in-a-javascript-action.
    setFailed(
      "There are API docs changes that aren't committed yet. Please generate them with `yarn generate:docs` then commit it."
    );
  }
})();
