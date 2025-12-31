import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
}

export default function Layout({ children, showNavigation = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900">
      {showNavigation && <Navigation />}
      <main>
        {children}
      </main>
    </div>
  );
}