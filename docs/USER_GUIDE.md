# User Guide

Welcome to AI Keyboard! This guide will help you get started and make the most of all features.

## Table of Contents

- [Getting Started](#getting-started)
- [Basic Usage](#basic-usage)
- [Voice Input](#voice-input)
- [Model Manager](#model-manager)
- [Customization](#customization)
- [Keyboard Features](#keyboard-features)
- [Tips & Tricks](#tips--tricks)
- [Troubleshooting](#troubleshooting)

---

## Getting Started

### First Launch

1. **Download & Install**
   - Download AI Keyboard from the Google Play Store
   - Install the app on your device

2. **Enable Keyboard**
   - Open AI Keyboard Settings
   - Follow the onboarding flow
   - Enable AI Keyboard in Android Settings → System → Languages & Input
   - Select AI Keyboard as default input method

3. **Grant Permissions**
   - Grant microphone permission when prompted (for voice input)
   - Grant storage permission if installing models from files

### Onboarding

The onboarding flow will guide you through:
- Enabling the keyboard
- Setting up voice input (optional)
- Installing your first model (optional)
- Customizing appearance

---

## Basic Usage

### Typing

1. **Open any text field**
2. **AI Keyboard will appear automatically**
3. **Start typing**
4. **Use suggestions** to speed up typing

### Suggestions

- **Word Suggestions**: Appears above the keyboard
- **Next-Word Predictions**: Shows likely next words
- **Tap to Insert**: Tap a suggestion to insert it

### Emoji

1. **Tap the emoji button** (😊) on the keyboard
2. **Browse emoji categories**
3. **Tap an emoji** to insert it

### Clipboard

1. **Long-press the space bar**
2. **Or tap the clipboard icon**
3. **Browse clipboard history**
4. **Tap to paste**

---

## Voice Input

### Setting Up Voice Input

1. **Open AI Keyboard Settings**
2. Navigate to **"AI Voice Input"**
3. **Toggle "Enable Voice Input"**
4. **Select an installed model** as "Active Model"
5. **Grant microphone permission** when prompted

### Using Voice Input

1. **Open any text field**
2. **Tap the microphone button** (🎤) on the keyboard
3. **Speak your text** clearly
4. **Watch the transcription** appear in the suggestions bar
5. **Tap the transcription** to insert it

### Voice Input Tips

- **Speak Clearly**: Speak at a moderate pace
- **Reduce Noise**: Minimize background noise
- **Pause Between Sentences**: Pause for better accuracy
- **Check Transcription**: Review before inserting

### Voice Input Settings

- **Enable/Disable Voice Input**: Toggle in settings
- **Active Model**: Choose which model to use
- **Sensitivity**: Adjust recording sensitivity (if available)
- **Auto-Insert**: Automatically insert transcription (optional)

---

## Model Manager

### Installing Models

#### Method 1: Install from File

1. **Prepare your model**
   - Ensure model is in ONNX or Vosk format
   - Create a `manifest.json` file (see [Model Guide](MODEL_GUIDE.md))

2. **Install via AI Keyboard**
   - Open AI Keyboard Settings
   - Navigate to **"AI Voice Input"** → **"Models"**
   - Tap **"Install Model"**
   - Select your model directory
   - Wait for installation

#### Method 2: Download from URL

1. **Get model URL**
   - Get the direct download URL for the model

2. **Download via AI Keyboard**
   - Open AI Keyboard Settings
   - Navigate to **"AI Voice Input"** → **"Models"**
   - Tap **"Download Model"**
   - Enter the model URL
   - Wait for download

### Managing Models

- **View Installed Models**: See all installed models in settings
- **Set Active Model**: Choose which model to use
- **Delete Models**: Remove models you no longer need
- **Model Information**: View model details (size, RAM, languages)

### Recommended Models

- **NVIDIA Parakeet 0.6B**: Best accuracy, multi-language
- **Distil-Whisper ONNX**: Fast, English-only
- **Vosk Small**: Lightweight, low-end devices

See [Model Guide](MODEL_GUIDE.md) for detailed information.

---

## Customization

### Themes

1. **Open AI Keyboard Settings**
2. Navigate to **"Appearance"** → **"Themes"**
3. **Select a theme**:
   - Default (Blue)
   - Dark Pro
   - Midnight Neon
   - Mint Glow
   - Minimal White
   - Custom (create your own)

### Custom Themes

1. **Open AI Keyboard Settings**
2. Navigate to **"Appearance"** → **"Themes"**
3. Tap **"Create Custom Theme"**
4. **Choose colors**:
   - Primary color
   - Secondary color
   - Background color
   - Key color
   - Text color
5. **Save** your theme

### Keyboard Appearance

- **Keyboard Height**: Adjust keyboard height in settings
- **Key Style**: Customize key appearance
- **Key Borders**: Show/hide key borders
- **Animations**: Enable/disable animations

### Typing Settings

- **Auto-Correct**: Enable/disable auto-correction
- **Gesture Typing**: Enable/disable swipe typing
- **Sound on Keypress**: Enable/disable keypress sounds
- **Haptic Feedback**: Enable/disable haptic feedback
- **Cursor Glide**: Enable/disable cursor glide

---

## Keyboard Features

### Gesture Typing (Swipe)

1. **Enable in settings**
2. **Swipe across keys** to type words
3. **Lift finger** to insert word
4. **Practice** to improve accuracy

### Long-Press Symbols

1. **Long-press a key** to see alternate characters
2. **Slide to select** the character you want
3. **Release** to insert

### Cursor Glide

1. **Enable in settings**
2. **Swipe on space bar** to move cursor
3. **Swipe left/right** to move cursor position

### Personal Dictionary

1. **Open AI Keyboard Settings**
2. Navigate to **"Dictionary"**
3. **Add words** to your personal dictionary
4. **Remove words** you don't want
5. **Words will be learned** as you type

### Clipboard Manager

1. **Open clipboard** (long-press space bar or tap clipboard icon)
2. **Browse clipboard history**
3. **Tap to paste** any item
4. **Pin items** for quick access
5. **Delete items** you no longer need

---

## Tips & Tricks

### Faster Typing

- **Use Suggestions**: Tap suggestions to speed up typing
- **Gesture Typing**: Learn swipe typing for faster input
- **Personal Dictionary**: Add frequently used words
- **Voice Input**: Use voice input for longer texts

### Better Voice Recognition

- **Choose Right Model**: Select model that matches your device
- **Speak Clearly**: Speak at a moderate pace
- **Reduce Noise**: Minimize background noise
- **Pause Between Sentences**: Pause for better accuracy

### Customization Tips

- **Try Different Themes**: Find a theme that works for you
- **Adjust Keyboard Height**: Find comfortable height
- **Customize Colors**: Create a custom theme
- **Experiment**: Try different settings

### Productivity Tips

- **Use Clipboard Manager**: Pin frequently used items
- **Personal Dictionary**: Add technical terms, names
- **Voice Input**: Use for longer texts, notes
- **Multi-Language**: Switch languages quickly

---

## Troubleshooting

### Voice Input Not Working

**Problem**: Voice input doesn't work or model fails to load.

**Solutions**:
1. Check microphone permission is granted
2. Verify a model is installed and set as active
3. Ensure the model file exists and is valid
4. Check device has sufficient RAM for the model
5. Try reinstalling the model
6. Restart the app

### Keyboard Not Appearing

**Problem**: AI Keyboard doesn't appear when typing.

**Solutions**:
1. Enable AI Keyboard in Android Settings → System → Languages & Input
2. Select AI Keyboard as default input method
3. Restart the app
4. Re-enable the keyboard
5. Check if another keyboard is interfering

### Model Installation Fails

**Problem**: Model installation fails or model doesn't appear.

**Solutions**:
1. Verify `manifest.json` is valid JSON
2. Check model file exists and matches manifest
3. Verify checksum if provided
4. Ensure sufficient storage space
5. Check file permissions
6. Try downloading from URL instead

### Low Voice Recognition Accuracy

**Problem**: Voice recognition accuracy is poor.

**Solutions**:
1. Try a different model (e.g., Parakeet for better accuracy)
2. Speak clearly and at a moderate pace
3. Reduce background noise
4. Ensure microphone permission is granted
5. Check microphone quality
6. Try a different recording environment

### App Crashes or Freezes

**Problem**: App crashes or freezes during use.

**Solutions**:
1. Restart the app
2. Clear app cache
3. Update to latest version
4. Check device storage and RAM
5. Uninstall and reinstall the app
6. Report the issue via GitHub Issues

---

## Support

### Getting Help

- **Documentation**: See `docs/` folder
- **Issues**: [GitHub Issues](https://github.com/muhib-karim/ai-keyboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/muhib-karim/ai-keyboard/discussions)

### Reporting Issues

When reporting issues, please include:
- Device information (model, OS version)
- App version
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots (if applicable)

---

**Last Updated**: November 2024

**AI Keyboard** — Type faster. Speak naturally. Stay private.











