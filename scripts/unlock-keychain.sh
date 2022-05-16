#!/bin/bash -e

# opening the keychain might not be enough, open screen sharing and do a git fetch in a terminal and
# macOS will open a window that asks for a password AND a button that says 'Allow always' (or something alike).
# When you select this button, git can retrieve the git passwd from the keychain without the UI from now on.
KEYCHAIN_PATH="${HOME}/Library/Keychains/login.keychain"
security unlock-keychain -p runner "${KEYCHAIN_PATH}"
security set-keychain-settings -t 7200 -l "${KEYCHAIN_PATH}"