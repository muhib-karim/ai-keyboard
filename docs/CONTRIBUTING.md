# Contributing to AI Keyboard

Thank you for your interest in contributing to AI Keyboard! This document provides guidelines and processes for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Adding New Features](#adding-new-features)
- [Adding New ASR Engines](#adding-new-asr-engines)
- [Branching & Versioning](#branching--versioning)
- [AI Assistant Usage](#ai-assistant-usage)

---

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow the Apache-2.0 license terms

---

## How to Contribute

### Reporting Bugs

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs. actual behavior
   - Device/OS information
   - Logs (if applicable)

### Suggesting Features

1. **Check existing issues** to avoid duplicates
2. **Create a new issue** with:
   - Clear, descriptive title
   - Problem statement
   - Proposed solution
   - Use cases

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

---

## Development Setup

### Prerequisites

- **Android Studio**: Hedgehog (2023.1.1) or later
- **Android SDK**: 26+ (Android 8.0+)
- **Kotlin**: 1.9+
- **Gradle**: 8.2+
- **JDK**: 17+

### Setup Steps

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/muhib-karim/ai-keyboard.git
   cd ai-keyboard
   ```

2. **Open in Android Studio**
   - Open Android Studio
   - Select "Open an Existing Project"
   - Navigate to the cloned directory

3. **Sync Gradle Dependencies**
   - Wait for sync to complete
   - Resolve any dependency issues

4. **Run the app**
   - Select a device or emulator
   - Click "Run" (▶️) or press `Shift+F10`

---

## Issue Guidelines

### Issue Template

Use this template when creating issues:

```markdown
**Description**
Clear, concise description of the issue or feature request.

**Steps to Reproduce** (for bugs)
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**
What should happen.

**Actual Behavior**
What actually happens.

**Device Information**
- Device: [e.g., Pixel 7]
- OS: [e.g., Android 14]
- App Version: [e.g., 1.0.0]

**Additional Context**
Any other relevant information.
```

### Issue Labels

- `bug` - Something isn't working
- `feature` - New feature request
- `enhancement` - Improvement to existing feature
- `documentation` - Documentation improvements
- `question` - Questions or clarifications
- `help wanted` - Extra attention needed
- `good first issue` - Good for newcomers

---

## Pull Request Process

### Before Submitting

1. **Test your changes**
   - Test on multiple devices/Android versions
   - Test edge cases
   - Ensure no regressions

2. **Update documentation**
   - Update README.md if needed
   - Update code comments
   - Add/update docs in `docs/` folder

3. **Follow code style**
   - Follow Kotlin coding conventions
   - Use ktlint/Detekt
   - Ensure proper formatting

4. **Write clear commit messages**
   - Use present tense ("Add feature" not "Added feature")
   - Reference issues (#123)
   - Keep messages concise

### PR Template

Use this template when creating pull requests:

```markdown
**Description**
Clear, concise description of changes.

**Type of Change**
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

**Testing**
- [ ] Tested on device
- [ ] Tested on emulator
- [ ] Unit tests added/updated
- [ ] No regressions

**Screenshots** (if applicable)

**Related Issues**
Closes #123
```

### PR Review Process

1. **Automated checks must pass**
   - Build succeeds
   - Tests pass
   - Code style checks pass

2. **Code review**
   - At least one maintainer approval required
   - Address review feedback
   - Make requested changes

3. **Merge**
   - Squash and merge (preferred)
   - Or merge commit (if multiple logical commits)

---

## Code Style

### Kotlin Conventions

- Follow [Kotlin Coding Conventions](https://kotlinlang.org/docs/coding-conventions.html)
- Use `ktlint` for formatting
- Maximum line length: 120 characters
- Use meaningful variable names
- Add comments for complex logic

### Compose Guidelines

- Use `@Composable` functions for UI
- Follow Material 3 design system
- Use theme colors and typography
- Support light/dark themes
- Ensure accessibility

### File Organization

```
app/src/main/java/com/aikeyboard/
├── ui/              # Settings UI (Compose)
├── ime/             # IME service and keyboard UI
├── settings/        # Settings screens
├── clipboard/       # Clipboard manager
├── dictionary/      # Personal dictionary
├── theme/           # Theme engine
└── voiceinput/      # Voice input module
    ├── engine/      # ASR engines (ONNX, Vosk)
    ├── modelmanager/# Model installation & management
    └── service/     # Voice input service
```

### Naming Conventions

- **Classes**: PascalCase (e.g., `KeyboardViewModel`)
- **Functions**: camelCase (e.g., `enableVoiceInput()`)
- **Variables**: camelCase (e.g., `isRecording`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_CLIPBOARD_SIZE`)
- **Packages**: lowercase (e.g., `com.aikeyboard.ui`)

---

## Adding New Features

### Feature Proposal Process

1. **Create an issue** describing the feature
2. **Discuss** with maintainers
3. **Get approval** before starting implementation
4. **Implement** the feature
5. **Test thoroughly**
6. **Submit PR**

### Feature Checklist

- [ ] Feature is well-documented
- [ ] Feature follows existing patterns
- [ ] Feature supports light/dark themes
- [ ] Feature is accessible
- [ ] Feature is tested
- [ ] Documentation updated

---

## Adding New ASR Engines

### Requirements

1. **Create engine interface implementation**
   - Extend `VoiceEngine` interface
   - Implement required methods
   - Handle errors gracefully

2. **Add model support**
   - Update `ModelManager` if needed
   - Add model validation
   - Support manifest format

3. **Add UI integration**
   - Add engine selection in settings
   - Show engine-specific options
   - Display engine status

4. **Add tests**
   - Unit tests for engine
   - Integration tests
   - Performance tests

5. **Update documentation**
   - Update `MODEL_GUIDE.md`
   - Add engine-specific instructions
   - Update README.md

### Engine Interface

```kotlin
interface VoiceEngine {
    suspend fun initialize(modelPath: String): Result<Unit>
    suspend fun transcribe(audioData: ByteArray): Result<String>
    suspend fun release()
    fun isInitialized(): Boolean
}
```

See existing implementations in `app/src/main/java/com/aikeyboard/voiceinput/engine/` for reference.

---

## Branching & Versioning

### Branch Naming

- `main` - Production-ready code
- `develop` - Development branch (if used)
- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `docs/documentation-name` - Documentation updates

### Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR.MINOR.PATCH** (e.g., 1.0.0)
- **MAJOR**: Breaking changes
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes

### Release Process

1. **Update version** in `app/build.gradle.kts`
2. **Update CHANGELOG.md**
3. **Create release branch** (`release/v1.0.0`)
4. **Test release build**
5. **Merge to main**
6. **Tag release** (`v1.0.0`)
7. **Create GitHub release**

---

## AI Assistant Usage

AI Keyboard is developed by a solo developer working with AI assistants (like Cursor, GitHub Copilot, etc.).

### Guidelines for AI-Assisted Development

- **Review all AI-generated code** carefully
- **Test thoroughly** before committing
- **Understand** the code you submit
- **Follow** existing code patterns
- **Document** complex AI-generated logic

### Attribution

- No special attribution needed for AI assistance
- Code is reviewed and tested as normal
- Maintain high code quality standards

---

## Getting Help

### Resources

- **Documentation**: See `docs/` folder
- **Issues**: [GitHub Issues](https://github.com/muhib-karim/ai-keyboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/muhib-karim/ai-keyboard/discussions)

### Contact

- **Ko-fi**: [https://ko-fi.com/ai_dev_2024](https://ko-fi.com/ai_dev_2024)

---

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 license.

---

**Thank you for contributing to AI Keyboard! 🎉**











