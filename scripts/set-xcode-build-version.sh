#!/bin/bash -e

NODE_PACKAGE_VERSION="$(grep -w 'version":' "${SRCROOT}"/../package.json | cut -d '"' -f4)"
NODE_PACKAGE_BUILD_NUMBER="$(grep -w 'buildNumber":' "${SRCROOT}"/../package.json | cut -d '"' -f4)"
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${NODE_PACKAGE_VERSION}" "${TARGET_BUILD_DIR}/${INFOPLIST_PATH}"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${NODE_PACKAGE_BUILD_NUMBER}" "${TARGET_BUILD_DIR}/${INFOPLIST_PATH}"