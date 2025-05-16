export default function Footer() {
    return (
      <footer className="w-full bg-gray-100 border-t border-gray-200 px-4 py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Chainable. All rights reserved.
      </footer>
    );
  }