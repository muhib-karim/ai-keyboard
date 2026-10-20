# Cloud-Based Android Development Guide

This guide helps you set up a lightweight, cloud-based development environment for Android development, avoiding the heavy local Android Studio setup.

## 🎯 Why Cloud Development?

- **Lightweight**: No need for Android Studio on your laptop
- **Fast**: Cloud instances have better hardware
- **Accessible**: Work from any device with internet
- **Consistent**: Same environment every time

## ☁️ Option 1: GitHub Codespaces (Recommended)

### Setup Steps

1. **Push your code to GitHub** (if not already)
   ```bash
   git remote add origin https://github.com/muhib-karim/ai-keyboard.git
   git push -u origin main
   ```

2. **Create a Codespace**
   - Go to your GitHub repository
   - Click "Code" → "Codespaces" → "Create codespace on main"
   - Choose a machine type (4-core recommended for Android builds)

3. **Configure the Codespace**
   
   Create `.devcontainer/devcontainer.json`:
   ```json
   {
     "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
     "features": {
       "ghcr.io/devcontainers/features/java:1": {
         "version": "17"
       },
       "ghcr.io/devcontainers/features/android:1": {
         "version": "latest"
       }
     },
     "customizations": {
       "vscode": {
         "extensions": [
           "mathiasfrohlich.Kotlin",
           "vscjava.vscode-gradle",
           "redhat.java"
         ]
       }
     },
     "forwardPorts": [8080, 5005],
     "postCreateCommand": "bash .devcontainer/setup.sh"
   }
   ```

   Create `.devcontainer/setup.sh`:
   ```bash
   #!/bin/bash
   set -e
   
   # Install Android SDK
   export ANDROID_HOME=$HOME/Android/Sdk
   mkdir -p $ANDROID_HOME
   
   # Download command line tools
   wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
   unzip commandlinetools-linux-*.zip -d $ANDROID_HOME/cmdline-tools
   mv $ANDROID_HOME/cmdline-tools/cmdline-tools $ANDROID_HOME/cmdline-tools/latest
   
   # Accept licenses and install SDK
   yes | $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager --licenses
   $ANDROID_HOME/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
   
   # Set up environment
   echo "export ANDROID_HOME=$ANDROID_HOME" >> ~/.bashrc
   echo "export PATH=\$PATH:\$ANDROID_HOME/platform-tools:\$ANDROID_HOME/tools" >> ~/.bashrc
   
   # Build the project
   ./gradlew assembleDebug
   ```

4. **Use the Codespace**
   - Open terminal in Codespaces
   - Build: `./gradlew assembleDebug`
   - The APK will be in `app/build/outputs/apk/debug/`

### Connecting to Emulator/Device

**Option A: Use Android Emulator in Browser**
- Use [Android Emulator in Browser](https://github.com/google/android-emulator-container-scripts) or similar services
- Forward ADB connection to your Codespace

**Option B: Use Physical Device via ADB over Network**
```bash
# On your local machine (with device connected)
adb tcpip 5555
adb connect <your-device-ip>:5555

# In Codespace, connect to your device
adb connect <your-device-ip>:5555
adb devices
```

**Option C: Use Cloud Emulator Services**
- [BrowserStack](https://www.browserstack.com/app-automate) - Free tier available
- [Sauce Labs](https://saucelabs.com/) - Free tier available
- [Firebase Test Lab](https://firebase.google.com/docs/test-lab) - Free tier available

## ☁️ Option 2: Google Cloud Shell / Cloud Run

### Setup

1. **Open Google Cloud Shell**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Click the Cloud Shell icon (top right)

2. **Clone and Setup**
   ```bash
   git clone https://github.com/muhib-karim/ai-keyboard.git
   cd AiKeyboard
   
   # Install Android SDK
   export ANDROID_HOME=$HOME/Android/Sdk
   mkdir -p $ANDROID_HOME
   # ... (similar to Codespaces setup)
   ```

3. **Build and Download APK**
   ```bash
   ./gradlew assembleDebug
   # Download via Cloud Shell's file browser or use gcloud storage
   ```

## ☁️ Option 3: AWS Cloud9 / EC2

### Setup

1. **Create EC2 Instance**
   - Choose Ubuntu 22.04 LTS
   - Instance type: t3.medium or larger (for Android builds)
   - Storage: 20GB minimum

2. **SSH into Instance**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   ```

3. **Install Dependencies**
   ```bash
   sudo apt update
   sudo apt install -y openjdk-17-jdk wget unzip
   
   # Install Android SDK (same as Codespaces)
   ```

4. **Build and Transfer**
   ```bash
   ./gradlew assembleDebug
   # Use scp to download APK
   scp -i your-key.pem ubuntu@your-instance-ip:~/AiKeyboard/app/build/outputs/apk/debug/app-debug.apk ./
   ```

## ☁️ Option 4: GitPod (Alternative to Codespaces)

### Setup

1. **Create `.gitpod.yml`**
   ```yaml
   image: gitpod/workspace-android
   
   tasks:
     - init: |
         ./gradlew assembleDebug
   
   ports:
     - port: 8080
       onOpen: ignore
   ```

2. **Open in GitPod**
   - Prefix your GitHub URL with `gitpod.io/#`
   - Or install GitPod browser extension

## 📱 Testing Options

### 1. Firebase Test Lab (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Upload and test
firebase test android run \
  --app app/build/outputs/apk/debug/app-debug.apk \
  --device model=Pixel6,version=33
```

### 2. BrowserStack App Live
- Upload APK to BrowserStack
- Test on real devices in the cloud
- Free tier: 100 minutes/month

### 3. ADB over Network
```bash
# On your local machine
adb tcpip 5555
adb connect <device-ip>:5555

# In cloud environment
adb connect <device-ip>:5555
adb install app/build/outputs/apk/debug/app-debug.apk
```

## 🚀 Quick Start Workflow

### Daily Development

1. **Open Codespace/GitPod**
   ```bash
   # Or use browser extension
   ```

2. **Make Changes**
   - Edit code in cloud IDE
   - Commit changes

3. **Build**
   ```bash
   ./gradlew assembleDebug
   ```

4. **Test**
   - Option A: Download APK and install on local device
   - Option B: Use Firebase Test Lab
   - Option C: Use BrowserStack

5. **Deploy**
   ```bash
   git push origin main
   ```

## 🔧 Recommended Setup

### GitHub Codespaces + Firebase Test Lab

1. **Development**: GitHub Codespaces
   - Fast, integrated with GitHub
   - Free tier: 60 hours/month

2. **Testing**: Firebase Test Lab
   - Real devices in cloud
   - Free tier: 5 tests/day

3. **CI/CD**: GitHub Actions
   - Auto-build on push
   - Auto-test on Firebase Test Lab

### GitHub Actions Workflow

Create `.github/workflows/build-and-test.yml`:
```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
    
    - name: Setup Android SDK
      uses: android-actions/setup-android@v2
    
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    
    - name: Build with Gradle
      run: ./gradlew assembleDebug
    
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: app-debug
        path: app/build/outputs/apk/debug/app-debug.apk
    
    - name: Run Firebase Test Lab
      uses: FirebaseExtended/action-hosting-deploy@v0
      with:
        repoToken: '${{ secrets.GITHUB_TOKEN }}'
        firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
        channelId: live
        projectId: your-project-id
```

## 💡 Tips

1. **Use Gradle Daemon**: Speeds up builds
   ```bash
   echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
   ```

2. **Cache Dependencies**: Save build time
   ```bash
   echo "org.gradle.caching=true" >> ~/.gradle/gradle.properties
   ```

3. **Parallel Builds**: Use multiple cores
   ```bash
   echo "org.gradle.parallel=true" >> ~/.gradle/gradle.properties
   ```

4. **Use Pre-built Emulators**: Save setup time
   - Use services like BrowserStack instead of setting up emulators

5. **Download APKs Easily**: Use GitHub Releases
   ```bash
   # After build, create release
   gh release create v1.0.1 app/build/outputs/apk/debug/app-debug.apk
   ```

## 📊 Cost Comparison

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| GitHub Codespaces | 60 hrs/month | $0.18/hr |
| GitPod | 50 hrs/month | $25/month |
| Firebase Test Lab | 5 tests/day | Pay-as-you-go |
| BrowserStack | 100 min/month | $29/month |

## 🎯 Recommended Setup for Your Use Case

**Best Option**: GitHub Codespaces + Firebase Test Lab

**Why:**
- ✅ Free tier covers most development
- ✅ Integrated with your GitHub repo
- ✅ Fast builds on cloud hardware
- ✅ Easy APK download
- ✅ Real device testing via Firebase

**Setup Time**: ~15 minutes
**Daily Workflow**: Open Codespace → Code → Build → Test → Deploy

---

## 🐛 Troubleshooting

### Build Fails in Cloud
- Check Android SDK installation
- Verify Java version (17 required)
- Check available disk space

### Can't Connect to Device
- Ensure device and cloud instance are on same network
- Check firewall settings
- Try ADB over network instead of USB

### Slow Builds
- Enable Gradle caching
- Use Gradle daemon
- Increase instance size (if paid)

---

**Next Steps:**
1. Choose your cloud platform
2. Set up the environment
3. Test the build process
4. Configure device connection
5. Start developing! 🚀

