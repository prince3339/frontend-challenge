// components
import Header from './header/Header';

interface Props {
	children: React.ReactElement;
}

const AppLayout = ({ children }: Props)=> {
  return (
		<div>
			<Header />
			{children}
		</div>  
	)
}

export default AppLayout;
