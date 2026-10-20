# Model Guide

This guide explains how to install, manage, and use ASR (Automatic Speech Recognition) models in AI Keyboard.

## Table of Contents

- [Supported Models](#supported-models)
- [Installing Models](#installing-models)
- [Manifest Format](#manifest-format)
- [Recommended Models](#recommended-models)
- [Model Requirements](#model-requirements)
- [Troubleshooting](#troubleshooting)
- [Licensing](#licensing)

---

## Supported Models

AI Keyboard supports two ASR engine types:

### ONNX Runtime Models

- **Format**: ONNX (`.onnx` files)
- **Best For**: High accuracy, multi-language support
- **Examples**: NVIDIA Parakeet, Distil-Whisper ONNX
- **License**: Apache-2.0, MIT, or custom

### Vosk Models

- **Format**: Vosk model files (multiple files per model)
- **Best For**: Lightweight, low-end devices
- **Examples**: Vosk small, medium models
- **License**: Apache-2.0

---

## Installing Models

### Method 1: Install from File (SAF)

1. **Download or prepare your model**
   - Ensure the model is in ONNX or Vosk format
   - Create a `manifest.json` file (see [Manifest Format](#manifest-format))

2. **Install via AI Keyboard**
   - Open AI Keyboard Settings
   - Navigate to **"AI Voice Input"** → **"Models"**
   - Tap **"Install Model"**
   - Select your model directory using the file picker
   - Wait for installation to complete

3. **Verify installation**
   - Check that the model appears in the models list
   - Verify the model status is "Installed"

### Method 2: Download from URL

1. **Get model URL**
   - Ensure the model is hosted publicly
   - Get the direct download URL

2. **Download via AI Keyboard**
   - Open AI Keyboard Settings
   - Navigate to **"AI Voice Input"** → **"Models"**
   - Tap **"Download Model"**
   - Enter the model URL
   - Wait for download to complete

3. **Complete installation**
   - The model will be downloaded in the background
   - You'll be notified when installation is complete

### Model Directory Structure

Models are installed in the app's private directory:

```
filesDir/models/<modelId>/
├── manifest.json          # Model metadata (required)
└── model.onnx            # ONNX model file (for ONNX models)
    # OR
├── am/                   # Vosk model files (for Vosk models)
├── graph/
└── ...
```

---

## Manifest Format

The `manifest.json` file contains metadata about your model. It's required for model installation.

### Required Fields

```json
{
  "id": "parakeet-0.6b",
  "display_name": "NVIDIA Parakeet 0.6B",
  "engine": "onnx",
  "file": "parakeet-0.6b.onnx"
}
```

### All Fields

```json
{
  "id": "parakeet-0.6b",
  "display_name": "NVIDIA Parakeet 0.6B",
  "engine": "onnx",
  "file": "parakeet-0.6b.onnx",
  "languages": ["en", "bn"],
  "size_bytes": 620000000,
  "checksum_sha256": "sha256:abc123...",
  "quantization": "fp16",
  "recommended_min_ram_mb": 2500,
  "description": "High accuracy offline ASR model",
  "license_type": "Apache-2.0",
  "license_url": "https://example.com/license",
  "copyright_holder": "NVIDIA"
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique model identifier |
| `display_name` | string | ✅ | Human-readable model name |
| `engine` | string | ✅ | Engine type: "onnx" or "vosk" |
| `file` | string | ✅ | Model file name (or directory for Vosk) |
| `languages` | array | ❌ | Supported language codes (e.g., ["en", "bn"]) |
| `size_bytes` | number | ❌ | Model file size in bytes |
| `checksum_sha256` | string | ❌ | SHA-256 checksum (format: "sha256:...") |
| `quantization` | string | ❌ | Quantization type: "fp16", "int8", etc. |
| `recommended_min_ram_mb` | number | ❌ | Minimum RAM requirement in MB |
| `description` | string | ❌ | Model description |
| `license_type` | string | ❌ | License type (e.g., "Apache-2.0", "MIT") |
| `license_url` | string | ❌ | License URL |
| `copyright_holder` | string | ❌ | Copyright holder name |

### Example Manifests

#### NVIDIA Parakeet 0.6B (ONNX)

```json
{
  "id": "parakeet-0.6b",
  "display_name": "NVIDIA Parakeet 0.6B",
  "engine": "onnx",
  "file": "parakeet-0.6b.onnx",
  "languages": ["en", "bn"],
  "size_bytes": 620000000,
  "checksum_sha256": "sha256:abc123...",
  "quantization": "fp16",
  "recommended_min_ram_mb": 2500,
  "description": "High accuracy offline ASR model from NVIDIA",
  "license_type": "Apache-2.0",
  "license_url": "https://www.apache.org/licenses/LICENSE-2.0",
  "copyright_holder": "NVIDIA"
}
```

#### Distil-Whisper ONNX

```json
{
  "id": "distil-whisper-onnx",
  "display_name": "Distil-Whisper ONNX",
  "engine": "onnx",
  "file": "distil-whisper.onnx",
  "languages": ["en"],
  "size_bytes": 150000000,
  "quantization": "fp16",
  "recommended_min_ram_mb": 1000,
  "description": "Fast, English-only Whisper model",
  "license_type": "Apache-2.0",
  "license_url": "https://www.apache.org/licenses/LICENSE-2.0",
  "copyright_holder": "OpenAI"
}
```

#### Vosk Small Model

```json
{
  "id": "vosk-model-small-en-us",
  "display_name": "Vosk Small (English US)",
  "engine": "vosk",
  "file": "vosk-model-small-en-us-0.15",
  "languages": ["en"],
  "size_bytes": 40000000,
  "recommended_min_ram_mb": 512,
  "description": "Lightweight Vosk model for English (US)",
  "license_type": "Apache-2.0",
  "license_url": "https://www.apache.org/licenses/LICENSE-2.0",
  "copyright_holder": "Vosk"
}
```

---

## Recommended Models

### NVIDIA Parakeet 0.6B (ONNX)

- **Best For**: Highest accuracy, multi-language support
- **Size**: ~620 MB
- **RAM**: 2.5 GB minimum
- **Languages**: English, Bengali, and more
- **License**: Apache-2.0
- **Download**: [NVIDIA Parakeet](https://catalog.ngc.nvidia.com/orgs/nvidia/models/nemotron-3-1.1b)

### Distil-Whisper ONNX

- **Best For**: Fast, English-only transcription
- **Size**: ~150 MB
- **RAM**: 1 GB minimum
- **Languages**: English only
- **License**: Apache-2.0
- **Download**: [Hugging Face](https://huggingface.co/distil-whisper)

### Vosk Small

- **Best For**: Low-end devices, minimal storage
- **Size**: ~40 MB
- **RAM**: 512 MB minimum
- **Languages**: Multiple (model-dependent)
- **License**: Apache-2.0
- **Download**: [Vosk Models](https://alphacephei.com/vosk/models)

---

## Model Requirements

### RAM Requirements

Models require RAM to load and run. Ensure your device has sufficient RAM:

- **Low-end models**: 512 MB - 1 GB
- **Mid-range models**: 1 GB - 2 GB
- **High-end models**: 2.5 GB+

### Storage Requirements

Models are stored on your device. Ensure sufficient storage:

- **Small models**: ~40 MB
- **Medium models**: ~150 MB
- **Large models**: ~620 MB+

### Device Compatibility

- **Android 8.0+** (API 26+)
- **Sufficient RAM** (see model requirements)
- **Sufficient storage** (see model size)

---

## Troubleshooting

### Model Installation Fails

**Issue**: Model installation fails with an error.

**Solutions**:
1. Verify `manifest.json` is valid JSON
2. Check model file exists and matches manifest
3. Verify checksum if provided
4. Ensure sufficient storage space
5. Check file permissions

### Model Load Fails

**Issue**: Model fails to load after installation.

**Solutions**:
1. Verify model file is not corrupted
2. Check model format matches engine type
3. Verify device has sufficient RAM
4. Try reinstalling the model
5. Check model logs in settings

### Out of Memory (OOM) Errors

**Issue**: App crashes or model fails with OOM error.

**Solutions**:
1. Use a smaller model
2. Close other apps to free RAM
3. Restart the device
4. Check device RAM against model requirements

### Low Accuracy

**Issue**: Transcription accuracy is poor.

**Solutions**:
1. Try a different model (e.g., Parakeet for better accuracy)
2. Speak clearly and at a moderate pace
3. Reduce background noise
4. Ensure microphone permission is granted
5. Check microphone quality

### Model Not Appearing

**Issue**: Installed model doesn't appear in the list.

**Solutions**:
1. Restart AI Keyboard
2. Check model directory structure
3. Verify `manifest.json` exists and is valid
4. Check model installation logs
5. Reinstall the model

---

## Licensing

### Model Licensing

Models have their own licenses. When installing a model:

1. **Check the license** before installation
2. **Verify commercial use** is allowed (if needed)
3. **Read attribution requirements**
4. **Comply with license terms**

### Common Licenses

- **Apache-2.0**: Permissive, commercial use allowed
- **MIT**: Permissive, commercial use allowed
- **CC-BY**: Requires attribution
- **Custom**: Check license terms

### Model Attribution

Some models require attribution. Check the model's license file or repository for requirements.

### License Information in App

AI Keyboard displays license information for installed models in the settings. Check the model details to see license information.

---

## Converting Models to ONNX

### Converting NVIDIA Parakeet

1. Download Parakeet model from NVIDIA NGC
2. Convert to ONNX using provided conversion scripts
3. Place `.onnx` file in model directory
4. Create `manifest.json` as shown above

### Converting Distil-Whisper

1. Download Distil-Whisper from Hugging Face
2. Convert using Hugging Face transformers + onnxruntime
3. Export to ONNX format
4. Create `manifest.json` as shown above

### Converting Custom Models

1. Export your model to ONNX format
2. Test model inference
3. Create `manifest.json`
4. Install in AI Keyboard

---

## Advanced Topics

### Model Validation

Models are validated during installation:

- JSON format validation for manifest
- File existence check
- Checksum verification (if provided)
- Basic format validation

### Model Verification

AI Keyboard verifies models using SHA-256 checksums when provided in the manifest. This ensures model integrity.

### Custom Model Development

To develop custom models:

1. Train or export your model to ONNX or Vosk format
2. Create a manifest.json
3. Test model inference
4. Install in AI Keyboard
5. Test transcription accuracy

---

## Support

For model-related questions:

- **Issues**: [GitHub Issues](https://github.com/muhib-karim/ai-keyboard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/muhib-karim/ai-keyboard/discussions)

---

**Last Updated**: 2024











