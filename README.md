# ACoolAGENT
# ACoolNERD Website

## ✨ Pages
- `index.html`: Variant switcher
- `academy.html`, `cause.html`, `ai.html`: Service pages
- `resume.html`: Professional profile
- `blog/`: 30+ blog posts on tech, business, branding, AI, and speaking

## 🔧 Tech Stack
- HTML5, CSS3, JS (Vanilla)
- Firebase Hosting
- Modular Structure for scalability

## 📂 Directory Tree
(Include structure from above)

## 🛠 Dev Commands
See `powershell-setup.ps1`

## 📤 Deploy
```bash
firebase deploy

---

### 📁 **Bonus: Create `powershell-setup.ps1`**
```powershell
# powershell-setup.ps1

Write-Host "Installing Firebase CLI..."
npm install -g firebase-tools

Write-Host "Logging into Firebase..."
firebase login

Write-Host "Initializing Firebase Hosting..."
firebase init hosting

Write-Host "Serving project locally..."
firebase serve
