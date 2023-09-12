#!/bin/bash

# Resolve the location of the script.
# This allows the script to be run from any directory.
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$script_dir"

# Check if Gradle Wrapper exists; if not, download it.
gradle_wrapper="gradle/wrapper/gradle-wrapper.jar"
if [ ! -f "$gradle_wrapper" ]; then
    echo "Gradle Wrapper not found. Downloading..."
    ./gradle/wrapper/gradle-wrapper-init.sh
fi

# Run Gradle with the Wrapper script.
./gradle/wrapper/gradle-wrapper.jar "$@"
