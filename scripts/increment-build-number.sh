#!/bin/bash -e

BUILD_NUMBER="$(jq ".buildNumber" ./package.json | cut -d '"' -f2)"
NEXT_BUILD_NUMBER=$(($BUILD_NUMBER + 1))
jq ".buildNumber = \"${NEXT_BUILD_NUMBER}\"" ./package.json > package.tmp.json && mv ./package.tmp.json ./package.json
