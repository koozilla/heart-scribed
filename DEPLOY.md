# Deploy to Vercel

## Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new? → Create new
   - Project name → heart-scribed (or your preferred name)
   - Directory → ./
   - Override settings? → No

5. **Your site will be live!** You'll get a URL like `https://heart-scribed.vercel.app`

## Option 2: Deploy via Vercel Dashboard

1. **Go to** [vercel.com](https://vercel.com) and sign in

2. **Click "Add New Project"**

3. **Import your Git repository** (if you have one):
   - Connect your GitHub/GitLab/Bitbucket account
   - Select the `heart-scribed` repository
   - Click "Import"

4. **Or drag and drop**:
   - Drag the entire `heart-scribed` folder to the Vercel dashboard
   - Vercel will auto-detect it's a static site

5. **Configure**:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: ./

6. **Deploy!**

## Option 3: Deploy via GitHub (Automatic)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel Dashboard** → Add New Project → Import from GitHub

3. **Select your repository** and deploy

4. **Future updates**: Just push to GitHub and Vercel will auto-deploy!

## Notes

- The `index.html` file will be served as the main page
- Static assets in the `public/` folder will be accessible
- Vercel will automatically handle routing for the static HTML file
