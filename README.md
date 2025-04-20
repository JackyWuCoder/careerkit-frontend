# CareerKit Frontend

**CareerKit Frontend** - Web interface for the CareerKit platform.

> A responsive UI for job seekers to generate tailored cover letters and beyond.

This project serves as the user-facing layer for CareerKit, a modular platform designed to support job seekers with tools such as tailored cover letter generation and more to come.

---

## 🚀 Tech Stack

- HTML, CSS, JavaScript (Vanilla)
- Modular file structure
- Integrated with external API (via backend service)

---

## 🛠 Features

- Input areas for cover letter and job description
- Static label injection (multi-language ready)
- Button for generating tailored content (API integration coming soon)

---

## 📝 Git Commit Message Format

**Using Conventional Commits**:

`<type>: <short message>`

| Type        | Purpose                                        |
|-------------|------------------------------------------------|
| `feat`      | New feature                                    |
| `fix`       | Bug fix                                        |
| `hotfix`    | Urgent fix on production                       |
| `docs`      | Documentation changes                          |
| `style`     | Code style or UI changes (non-functional)      |
| `chore`     | Maintenance/setup work                         |
| `refactor`  | Code restructuring (no feature change)         |
| `test`      | Add or modify tests                            |
| `ci`        | CI configuration changes (GitHub Actions, etc.)|
| `exp`       | Experimental code/features (may be removed)    |

---

## 🧩 Naming Notes

Some naming conventions were inherited from the initial structure. These may be updated later for clarity and alignment with frontend standards:

- `style.css` → `styles.css`  
- `resources/` → `assets/`  
- `js/classes/` → `js/modules/` or `js/core/`  
- `apiHub.js` → `apiClient.js` or `coverLetterService.js`  
- `staticPopulator.js` → `textInjector.js` or `labelLoader.js`

These changes will be considered after MVP is complete to avoid breaking structure during active development.

---

## 🗂 Status

> MVP in progress – currently focused on UI structure and component logic. Backend and deployment integration next.

---

### 🔁 Git Workflow & Branch Strategy

This project follows a **real-world team simulation workflow** with the following conventions:

#### 📌 Branching Strategy

| Branch      | Purpose                                                                        |
|-------------|--------------------------------------------------------------------------------|
| `main`      | 🟢 Production-ready code only. Protected branch with enforced reviews.        |
| `dev`       | 🛠️ Active development/integration branch. All features are merged here first. |
| `feat/*`    | ✨ Feature branches for new additions.                                        |
| `fix/*`     | 🐛 Bug fixes.                                                                 |
| `hotfix/*`  | 🚨 Emergency patches (applied directly to `main`, if needed).                 |

---

#### ✅ Pull Request Rules

- All changes are introduced via **pull requests (PRs)**.
- **`main` branch:**
  - Requires PRs with at least **1 approving review**.
  - PR authors **cannot approve their own PRs**.
  - CI (build + lint) must pass.
  - Force pushes are **blocked**.
- **`dev` branch:**
  - PRs are encouraged, but direct pushes are allowed for speed.
  - CI is run on all pushes and PRs.
  - No required approvals.

---

#### 🚦 Merge Method

Only **squash and merge** is enabled to maintain a clean, linear commit history.

---

#### 🛡️ Protected Branches

| Branch | Protection Rules |
|--------|------------------|
| `main` | ✅ PRs only, ✅ CI required, ✅ 1 approval, ✅ No force push |
| `dev`  | ✅ CI optional, 🚫 Review required, ✅ PR preferred |