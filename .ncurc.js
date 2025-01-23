// see bug https://github.com/raineorshine/npm-check-updates/issues/1442

function filterResultsFunction(packageName, { upgradedVersionSemver }) {
  if (packageName === "typescript") {
    // peer typescript@">=5.5 <5.7" from @angular-devkit/build-angular@19.0.7
    const upgradedMajor = parseInt(upgradedVersionSemver?.major, 10);
    const upgradedMinor = parseInt(upgradedVersionSemver?.minor, 10);
    if (upgradedMajor > 5 || upgradedMinor > 6) {
      return false;
    }
    return true;
  }
  return true;
}

module.exports = {
  filterResults: filterResultsFunction
};
