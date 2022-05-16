#!/usr/bin/env sh

yarn --network-timeout 100000 || exit 1

yarn lint || exit 1
yarn test || exit 1
