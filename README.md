# SvelteKit + Shadcn UI + Tailwind CSS Template

This template has been meticulously crafted by [Queaxtra](https://github.com/queaxtra) to provide a robust and scalable foundation for your projects. It is production-ready and can be seamlessly integrated into any professional workflow.

## Features
- **SvelteKit**: A cutting-edge web framework designed for building high-performance, scalable web applications.
- **Shadcn UI**: A comprehensive suite of UI components built with Radix UI and Tailwind CSS, ensuring both flexibility and accessibility.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid and consistent custom design implementation.
- **i18n Support**: Built-in internationalization (i18n) infrastructure, making it easy to create multilingual applications out of the box.

## Installation

To set up this template, please follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/queaxtra/sveltekit-shadcn-template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd sveltekit-shadcn-template
   ```

3. Install the project dependencies:
   ```bash
   bun install
   # npm install
   # pnpm install
   # yarn install
   ```

4. Launch the development server:
   ```bash
   bun run dev
   # npm run dev
   # pnpm run dev
   # yarn run dev
   ```

## Usage

After downloading the infrastructure, the entire setup is fully ready to use. To start your project, simply update the project name and package names according to your requirements. After that, you can quickly begin your professional development process.

> **i18n Usage:**
> The template comes with an advanced and integrated i18n (internationalization) infrastructure. You can easily add new languages and translations or modify existing ones according to your project's requirements. Language management operations can be performed via the `src/lib/stores/language.ts` file. To provide additional language support, you can create new language files by duplicating the existing ones under the `src/locales` directory. Don't forget to import the new languages in the `src/lib/i18n/main.ts` file to include them in your project.

## License

This template is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
