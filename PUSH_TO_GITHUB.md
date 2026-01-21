# Push to GitHub - Step by Step

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `heart-scribed`
4. Description: "Bible verse memorization mobile app promo page"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click **"Create repository"**

## Step 2: Push Your Code

Run these commands in your terminal:

```bash
# Navigate to the project
cd /Users/saekoo/koozilla3/heart-scribed

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Heart Scribed promo page"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/heart-scribed.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify

1. Go to your GitHub repository page
2. You should see all your files there!

## After Pushing to GitHub

Once your code is on GitHub, you can:
- **Deploy to Vercel**: Vercel Dashboard → Add New Project → Import from GitHub → Select `heart-scribed`
- **Share your code**: Anyone can view/clone your repository
- **Collaborate**: Add collaborators in GitHub settings

## Troubleshooting

**If you get "repository already exists" error:**
- The repo name might be taken, try `heart-scribed-app` or `heart-scribed-mobile`

**If you get authentication errors:**
- Use GitHub CLI: `gh auth login`
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/heart-scribed.git`
