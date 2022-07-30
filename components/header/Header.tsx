import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// icons
import { CreditCardIcon, HomeIcon, SunIcon } from '@heroicons/react/solid';

// context
import { AppContext } from 'context/AppContext';

const TABS = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Wallet', href: '/wallet', icon: CreditCardIcon },
]

const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ')
}

const Header = ()=> {
	const { asPath } = useRouter();
	const { setTheme } = useContext<any>(AppContext);

	useEffect(() => {
	}, [])

  return (
		<div className='shadow-sm dark:shadow-md dark:shadow-gray-900 shadow-gray-300 relative'>
			<nav className="-mb-px flex space-x-8 justify-center" aria-label="Tabs">
				{TABS.map((tab) => (
					<Link key={tab.name} href={tab.href}>
						<a
							className={classNames(
								asPath == tab.href
									? 'border-green-500 dark:text-white'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
								'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
							)}
							aria-current={asPath == tab.href ? 'page' : undefined}
						>
							<tab.icon
								className={classNames(
									asPath == tab.href ? 'dark:text-white' : 'text-gray-400 group-hover:text-gray-500',
									'-ml-0.5 mr-2 h-5 w-5'
								)}
								aria-hidden="true"
							/>
							<span>{tab.name}</span>
						</a>
					</Link>
				))}
			</nav>
			<button
				className='absolute right-5 top-4'
				onClick={setTheme}
			>
				<SunIcon className='dark:text-white text-sm w-6' />
			</button>
		</div>  
	)
}

export default Header;
