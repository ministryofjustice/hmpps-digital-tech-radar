#!/bin/bash

# Check if 'build' folder exists
if [ ! -d "build" ]; then
  echo "'build' folder not found!"
  exit 1
fi

# Remove existing 'docs' folder if it exists
if [ -d "docs" ]; then
  rm -rf docs
  echo "'docs' folder removed."
fi

# Create a new 'docs' folder
mkdir docs
echo "'docs' folder created."

# Copy everything from 'build' to 'docs'
cp -r build/* docs/
echo "Files copied from 'build' to 'docs'."