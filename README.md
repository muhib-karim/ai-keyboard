<div align="center">

<img src="branding/logo/svg/concept-d-mic-key-hybrid-gradient.svg" alt="AI Keyboard logo" width="120">

# AI Keyboard

**An Android keyboard with offline voice typing, using speech models the user chooses**

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Android-green.svg)](https://www.android.com)
[![Minimum SDK](https://img.shields.io/badge/min%20SDK-26-orange.svg)](https://developer.android.com/about/versions/oreo)

</div>

> **Status: earlier prototype.** This repository is not under active development. Active work continues in [muhib-karim/humming-keyboard](https://github.com/muhib-karim/humming-keyboard).

## What it is

AI Keyboard is an Android input method (IME) that combines a standard typing keyboard with on-device speech recognition. Voice input runs through a pluggable engine layer (ONNX Runtime or Vosk), and users install the model that suits their device instead of being tied to one vendor's cloud service.

## Why it matters

Most voice keyboards send audio to a server. Running ASR locally keeps audio on the phone and works without a connection, but the right model depends on the hardware: a 0.6B-parameter model is accurate on a flagship and unusable on a 2 GB phone. Making the model a user-installable, manifest-described artifact is the core design idea here.

## How it works

```
AIKeyboardService (IME, Jetpack Compose UI)
 ├── typing: autocorrect, gesture typing, emoji, clipboard, personal dictionary (Room)
 └── VoiceInputService
      └── VoiceEngine interface
           ├── ONNXVoiceEngine  (ONNX Runtime Mobile)
           └── VoskVoiceEngine  (Vosk Android)
ModelManager: installs models from a folder (SAF) or URL, reads manifest.json,
              verifies SHA-256, stores them under filesDir/models/<modelId>/
```

Source lives in `app/src/main/java/com/aikeyboard/`. Dependency injection is Hilt; persistence is Room plus DataStore for preferences.

A model is a directory with a `manifest.json`:

```json
{
  "id": "parakeet-0.6b",
  "display_name": "NVIDIA Parakeet 0.6B",
  "engine": "onnx",
  "file": "parakeet-0.6b.onnx",
  "languages": ["en", "bn"],
  "size_bytes": 620000000,
  "checksum_sha256": "sha256:...",
  "quantization": "fp16",
  "recommended_min_ram_mb": 2500,
  "description": "High accuracy offline ASR model"
}
```

Models the project is designed around (sizes and RAM are planning figures from [docs/MODEL_GUIDE.md](docs/MODEL_GUIDE.md), not benchmarks):

| Model | Engine | Size | RAM | Languages |
|-------|--------|------|-----|-----------|
| NVIDIA Parakeet 0.6B | ONNX | ~620 MB | 2.5 GB | Multi |
| Distil-Whisper | ONNX | ~150 MB | 1 GB | English |
| Vosk Small | Vosk | ~40 MB | 512 MB | Multi |

No model weights are bundled. See [MODEL_LICENSING_SUMMARY.md](MODEL_LICENSING_SUMMARY.md) and [MODEL_DISCLAIMERS.md](MODEL_DISCLAIMERS.md) for licensing notes.

## Quickstart

Requirements: Android SDK 34, **JDK 17** (the build targets JVM 17; [BUILD_REPORT.md](BUILD_REPORT.md) records KAPT failing under JDK 21), Gradle 8.2 via the wrapper.

```bash
git clone https://github.com/muhib-karim/ai-keyboard.git
cd ai-keyboard
cp local.properties.example local.properties   # set sdk.dir
./gradlew assembleDebug
```

The debug APK is written to `app/build/outputs/apk/debug/app-debug.apk`. For signed release builds, copy `keystore.properties.example` to `keystore.properties` and run `./gradlew assembleRelease`; see [SIGNING_DEPLOYMENT_INSTRUCTIONS.md](SIGNING_DEPLOYMENT_INSTRUCTIONS.md).

After installing: enable AI Keyboard under **Settings → System → Languages & input**, then in the app go to **AI Voice Input → Models** to install a model and set it as active. Full walkthrough: [docs/USER_GUIDE.md](docs/USER_GUIDE.md).

## Results and status

There are no measured performance or accuracy numbers in this repository yet. Honest status, from the repo's own reports:

- **Performance targets are defined but not measured.** [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) sets keyboard startup < 200 ms, model load < 2 s and partial transcription latency < 500 ms on mid-range devices; all are marked "Needs Testing". An in-app ASR benchmark screen exists (`asrtesting/`) to collect them.
- **Local build:** [BUILD_REPORT.md](BUILD_REPORT.md) documents a KAPT incompatibility with JDK 21; the recommended fixes are JDK 17 or migrating to KSP.
- **Tests:** unit tests cover billing (`app/src/test/.../billing/`). Wider device testing is configured through Firebase Test Lab in CI but has no recorded results in the repo.
- **Not released:** the app is not on Google Play. The store listing, press kit and marketing material in this repo are drafts prepared ahead of a planned launch.

## Features

Typing: autocorrect and next-word suggestions, gesture (swipe) typing, cursor glide, long-press symbols, emoji picker, clipboard history with pinning, personal dictionary, theme engine with Material 3 light/dark themes, adjustable height, haptics and sound settings.

Voice: ONNX and Vosk engines behind one interface, model install from file or URL, SHA-256 verification, partial (streaming) transcription display, Pro features via Google Play Billing.

## Privacy

Speech recognition runs on-device; audio is not sent to a server, and the only network calls the voice path makes are user-initiated model downloads. Note that the Gradle config includes Firebase Crashlytics and Analytics dependencies. See [docs/PRIVACY.md](docs/PRIVACY.md) and [docs/SECURITY.md](docs/SECURITY.md).

## CI

Workflows in [`.github/workflows/`](.github/workflows/): `android-ci.yml` (debug build on PRs), `android-super-ci.yml` (build plus Firebase Test Lab robo tests on push to main), `android-release.yml` and `android-play-upload.yml` (release bundle and Play upload), `codeql-analysis.yml` and `dependency-scan.yml` (security scanning). Firebase Test Lab and Play upload need project secrets to run.

## Project layout

```
app/                 Android app (IME, voice engines, model manager, settings, billing)
docs/                User, model, theming, privacy, security and contributing guides
branding/            Logo concepts, adaptive icons, style guide
website/             Static landing page
store-assets/, press-kit/, marketing/   Launch drafts (unreleased)
.github/workflows/   CI and release pipelines
```

## Documentation

- [User Guide](docs/USER_GUIDE.md)
- [Model Guide](docs/MODEL_GUIDE.md)
- [Theming Guide](docs/THEMING_GUIDE.md)
- [Privacy](docs/PRIVACY.md)
- [Security](docs/SECURITY.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

## Links

- Author: [Muhib Karim](https://github.com/muhib-karim)
- Active successor project: [humming-keyboard](https://github.com/muhib-karim/humming-keyboard)
- Issues: [github.com/muhib-karim/ai-keyboard/issues](https://github.com/muhib-karim/ai-keyboard/issues)
- Ko-fi: [ko-fi.com/ai_dev_2024](https://ko-fi.com/ai_dev_2024)

## License

Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE). Third-party libraries include ONNX Runtime Mobile (MIT), Vosk Android, Jetpack Compose, Room and Hilt (Apache-2.0).
