#!/bin/bash
env_file_name=".env"
if [ -e $env_file_name ]; then
  echo "File already exists!"
else
  echo "NODE_ENV=development" >> $env_file_name
  echo "PORT = 3000" >> $env_file_name
  echo "API_URL = https://localhost" >> $env_file_name
  echo "API_KEY = TO_BE_REPLACED_MANUALLY" >> $env_file_name
  echo "Created .env successfully"
fi
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Linux"
elif [[ "$OSTYPE" == "darwin"* ]]; then
        echo "Mac" # Mac OSX
elif [[ "$OSTYPE" == "cygwin" ]]; then
        echo "Linux emulation on Windows" # POSIX compatibility layer and Linux environment emulation for Windows
elif [[ "$OSTYPE" == "msys" ]]; then
        echo "Windows" # Lightweight shell and GNU utilities compiled for Windows (part of MinGW)
elif [[ "$OSTYPE" == "win32" ]]; then
        echo "Windows32" #
elif [[ "$OSTYPE" == "freebsd"* ]]; then
        echo "FreeBSD" # ...
else
        echo "Unknown operating system"
fi