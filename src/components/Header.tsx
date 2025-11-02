import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/3019426010/2711449369.webp"
                alt="10a Juweelontwerp"
                width={180}
                height={35}
                className="h-8 w-auto mb-1"
              />
            </Link>
            <p className="text-gray-600 text-base italic">De kruising van het organische en het strakke inspireren de vorm</p>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-[#8fc0e5] font-medium text-sm">WELKOM</Link>
            <div className="relative group">
              <Link href="/juwelen" className="flex items-center space-x-1 text-gray-700 hover:text-[#8fc0e5] font-medium text-sm">
                <span>JUWELEN</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/ringen" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Ringen</Link>
                  <Link href="/oorringen" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Oorringen</Link>
                  <Link href="/mannen" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Mannen</Link>
                  <Link href="/halskettingen" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Halskettingen</Link>
                  <Link href="/armbanden" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Armbanden</Link>
                  <Link href="/broches" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm">Broches</Link>
                </div>
              </div>
            </div>
            <Link href="/reparaties" className="text-gray-700 hover:text-[#8fc0e5] font-medium text-sm">REPARATIES</Link>
            <Link href="/studio" className="text-gray-700 hover:text-[#8fc0e5] font-medium text-sm">CREATIEVE STUDIO</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#8fc0e5] font-medium text-sm">CONTACT</Link>
            <Link href="/over-mij" className="text-gray-700 hover:text-[#8fc0e5] font-medium text-sm">OVER MIJ</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}