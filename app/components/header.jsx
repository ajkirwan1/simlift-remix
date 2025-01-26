/** @format */

export default function Header() {
  return (
    <header className="flex justify-between items-center h-32 bg-blue-800">
      <div className="ml-8">Logo</div>
      <div className="flex mr-8 w-64 justify-around">
        <ul>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
