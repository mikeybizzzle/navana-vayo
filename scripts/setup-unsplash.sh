#!/bin/bash

# Unsplash Integration Setup Script
# This script helps you set up the Unsplash API integration

echo "🖼️  Vayo Vault - Unsplash Integration Setup"
echo "=========================================="
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ Found existing .env.local file"
else
    echo "📝 Creating .env.local file..."
    touch .env.local
fi

# Check if Unsplash key is already set
if grep -q "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY" .env.local; then
    echo "✅ Unsplash API key already configured"
    echo ""
    echo "Current value:"
    grep "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY" .env.local
    echo ""
    read -p "Do you want to update it? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Keeping existing key."
        exit 0
    fi
fi

echo ""
echo "To get your Unsplash API key:"
echo "1. Visit: https://unsplash.com/developers"
echo "2. Create an account or log in"
echo "3. Create a new application"
echo "4. Copy your Access Key"
echo ""
read -p "Enter your Unsplash Access Key: " unsplash_key

if [ -z "$unsplash_key" ]; then
    echo "❌ No key provided. Exiting."
    exit 1
fi

# Remove existing key if present
sed -i '' '/NEXT_PUBLIC_UNSPLASH_ACCESS_KEY/d' .env.local 2>/dev/null || true

# Add new key
echo "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=$unsplash_key" >> .env.local

echo ""
echo "✅ Unsplash API key has been configured!"
echo ""
echo "Next steps:"
echo "1. Restart your development server"
echo "2. Visit a blog post to see Unsplash images"
echo "3. Check UNSPLASH-INTEGRATION.md for customization options"
echo ""
echo "Happy blogging! 🎉"
