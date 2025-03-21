#!/bin/bash

# Check if virtualenvwrapper is available
if [ -f /usr/local/bin/virtualenvwrapper.sh ]; then
    source /usr/local/bin/virtualenvwrapper.sh
fi

# Activate the virtualenv
workon ras-blog

# Print Node.js and npm versions
echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"

# Setup aliases for pnpm commands based on README
alias pnpm-install="pnpm install"
alias pnpm-dev="pnpm run dev"
alias pnpm-dev-network="pnpm run dev:network"
alias pnpm-sync="pnpm run sync"
alias pnpm-build="pnpm run build"
alias pnpm-preview="pnpm run preview"
alias pnpm-preview-network="pnpm run preview:network"
alias pnpm-lint="pnpm run lint"
alias pnpm-lint-fix="pnpm run lint:fix"

echo "✅ ras-blog environment activated!"
echo "Use pnpm-* aliases for project commands (pnpm-dev, pnpm-build, etc.)" 