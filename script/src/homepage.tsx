
// import React, { useEffect, useRef } from "react";
import FeaturedCarousel from './featured_carousel'
import SimpleIconRow from './icons'





export default function Homepage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">Programming Club Challenge Portal</div>
              </div>
              <nav className="hidden md:flex gap-4 ml-6">
                <a href="#" className="px-3 py-2 rounded hover:bg-slate-100">Discover</a>
                <a href="#create" className="px-3 py-2 rounded hover:bg-slate-100">Create</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block">
                <input type="search" placeholder="Search projects" className="w-64 px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Featured</h2>
            <FeaturedCarousel />

        </section>

        <section id="games" className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Featured</h2>
              <SimpleIconRow />

        </section>


        <section id="create" className="mt-10 bg-white rounded-xl p-6 shadow flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Want to publish your own challenge? Click on the button below!</h3>
          </div>
          <div>
            <button className="px-4 py-2 rounded bg-indigo-600 text-white">Create a challenge</button>
          </div>
        </section>

        <footer className="mt-12 text-sm text-slate-500">
        </footer>
      </main>
    </div>
  );
}
