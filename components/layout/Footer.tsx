import Link from "next/link"
import { Route } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/50 bg-white dark:border-slate-800/70 dark:bg-[#020817]">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600 shadow-sm shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                                <Route strokeWidth={2.5} className="w-5 h-5 text-white" />
                            </span>
                            <span className="text-xl tracking-tight font-black text-slate-900 dark:text-white">
                                Roadly
                            </span>
                        </Link>
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                            The ultimate interactive canvas to build, track, and share your learning roadmaps.
                        </p>

                        <div className="mt-6 flex gap-3 items-center">
                            <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                            Product
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm font-medium">
                            <li>
                                <Link href="/feature" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Features</Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Teams</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Changelog</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                            Company
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm font-medium">
                            <li>
                                <Link className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Career</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                            Stay in the loop
                        </h3>
                        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Get product updates and mapping strategies delivered directly to your inbox.</p>
                        <form action="#" className="mt-5 flex gap-2">
                            <input
                                placeholder="Enter your email"
                                type="email"
                                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 transition-all font-medium"
                            />
                            <button className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40" type="submit">Join</button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 text-sm font-medium text-slate-500 dark:border-slate-800/70 dark:text-slate-500 sm:flex-row">
                    <p>© {new Date().getFullYear()} Roadly. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="transition hover:text-slate-900 dark:hover:text-white">Privacy</Link>
                        <Link href="#" className="transition hover:text-slate-900 dark:hover:text-white">Terms</Link>
                        <Link href="#" className="transition hover:text-slate-900 dark:hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}