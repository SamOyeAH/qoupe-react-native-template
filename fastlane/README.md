## fastlane documentation

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android build_debug

```sh
[bundle exec] fastlane android build_debug
```

Build Android debug version

### android build_release

```sh
[bundle exec] fastlane android build_release
```

Build Android release version

### android app_center_debug

```sh
[bundle exec] fastlane android app_center_debug
```

Upload Android Debug to AppCenter

### android app_center_release

```sh
[bundle exec] fastlane android app_center_release
```

Upload Android Release to AppCenter

---

## iOS

### ios update_development_certificates

```sh
[bundle exec] fastlane ios update_development_certificates
```

Fetch and update certificates and provisioning profiles

### ios get_development_certificates

```sh
[bundle exec] fastlane ios get_development_certificates
```

Fetch certificates and provisioning profiles

### ios build_development_debug

```sh
[bundle exec] fastlane ios build_development_debug
```

Build iOS development debug version

### ios build_development_release

```sh
[bundle exec] fastlane ios build_development_release
```

Build iOS development release version

### ios app_center_upload

```sh
[bundle exec] fastlane ios app_center_upload
```

Upload iOS to AppCenter

### ios app_center_debug

```sh
[bundle exec] fastlane ios app_center_debug
```

Upload iOS Debug to AppCenter

### ios app_center_release

```sh
[bundle exec] fastlane ios app_center_release
```

Upload iOS Release to AppCenter

### ios app_center_debug_ci

```sh
[bundle exec] fastlane ios app_center_debug_ci
```

Upload iOS Debug to AppCenter in CI

### ios app_center_release_ci

```sh
[bundle exec] fastlane ios app_center_release_ci
```

Upload iOS Debug to AppCenter in CI

---

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
