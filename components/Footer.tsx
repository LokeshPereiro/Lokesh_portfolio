export const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Lokesh Pereiro. All rights reserved -
        Made with 💖
      </small>
      <p className="text-xs">
        <span className="font-semibold">Tech Stack:</span> built with React &
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer
        Motion, React Email & Resend.
      </p>
    </footer>
  );
};
