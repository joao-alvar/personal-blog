import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {/*.filter((link) => link.href !== '/')
          .map((link) => (*/}
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            <span className="hover:text-primary-400">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
