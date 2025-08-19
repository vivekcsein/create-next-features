# how to create and handle forms

A scalable, inclusive, and future-proof form creation framework built with React, Zod, and react-hook-form. Designed for onboarding, biodata, and authentication flows with reusable components and unified schema logic

🚀 Features

- ✅ Type-safe schema validation using Zod
- 🧱 Generic, reusable form components (SelectorInput, Checkbox, etc.)
- 🔗 Unified schema merging via .shape spreading
- 🌍 Inclusive selector options for complexion, religion, nationality, hobbies
- ⚙️ Dynamic default values and error handling
- ⚡️ Optimized rendering with useMemo and useCallback

📦 Structure

```bash
/libs
└── forms/
└── form.file.ts # Define form types and input configs

└── schema/
└── schema.file.ts # Define Zod schema with merged shapes

/components/context
└── file.main.tsx # Compose full form using imported components
└── file.form.tsx # Render basic form with react-hook-form

```

🛠️ Setup Instructions

- Create Form Configs
  In /libs/forms/form.file.ts, define your form fields, types, and UI configs.
- Define Schema
  In /libs/schema/schema.file.ts, build your Zod schema using .shape spreading for modular validation.
- Build Form Components
  In /components/context/file.form.tsx, use useForm, Controller, and generic components to render inputs.
- Compose Final Form
  In /components/context/file.main.tsx, import your schema and form components, handle submission, and wrap with context providers if needed.

🧠 Best Practices

- Use useMemo for input config generation
- Use useCallback for event handlers and validation logic
- Keep selector options inclusive, localized, and respectful
- Separate schema logic from UI rendering for clarity and reuse
- Validate both client-side and server-side for robustness
