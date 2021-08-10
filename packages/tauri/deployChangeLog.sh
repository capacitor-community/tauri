set -e

PACKAGE_JSON=`cat package.json`;
export PACKAGE_VERSION="$(node -pe "JSON.parse(\`$PACKAGE_JSON\`)['version']")"

echo "Deploying Capacitor-Community/tauri v$PACKAGE_VERSION changelog"

# This is what we do instead of letting lerna git commit for us
git add CHANGELOG.md
git commit -m "changelog: update changelog for $PACKAGE_VERSION"
git push origin main