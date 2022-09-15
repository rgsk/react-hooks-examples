interface ILayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>nav bar at top</nav>
      {children}
      <footer>footer at bottom</footer>
    </div>
  );
};
export default Layout;
