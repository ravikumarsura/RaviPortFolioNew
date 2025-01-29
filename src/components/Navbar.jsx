import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white">
      {/* Header Section */}
      <header className="fixed inset-x-0 top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-80">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="#"
              className="text-2xl font-bold tracking-wide text-amber-300 hover:text-yellow-300 transition-transform transform hover:scale-110"
            >
              Ravikumar Sura
            </a>
          </motion.div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex lg:gap-10">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-amber-300 hover:text-yellow-300 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="relative z-50"
        >
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 shadow-xl">
            {/* Header */}
            <motion.div
              className="flex items-center justify-between mb-6"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <a
                href="#"
                className="text-xl font-bold tracking-wide text-yellow-300"
              >
                Portfolio
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium hover:text-yellow-300 transition-transform transform hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <motion.div
        id="home"
        className="relative isolate px-6 pt-24 pb-32 lg:px-12 bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Background Blur */}
        <motion.div
          className="absolute -z-10 inset-0 bg-gradient-to-r from-indigo-500 via-transparent to-purple-500 opacity-60 blur-3xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-5xl font-extrabold sm:text-6xl text-yellow-300 tracking-wide"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Elevate My Digital Presence
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl font-medium text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting innovative solutions through design and technology. Explore
            my projects, skills, and achievements.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center gap-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-yellow-400 px-6 py-3 text-lg font-semibold text-black hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-yellow-300 px-6 py-3 text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
