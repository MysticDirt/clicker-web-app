import Clicker from './Clicker';
import ClickDisplay from './ClickDisplay';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <ClickDisplay />
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex w-1/2 flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-1/2 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Clicker.</strong> This is a simple React and Next.js app, brought to you by {' '}
            <a href="https://www.linkedin.com/in/chandrark-muddana/" className="text-blue-500">
              Chandrark
            </a>
            .
          </p>
        </div>
        <div className={"flex flex-col w-1/2 justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-1/2 md:px-20"}>
          <Clicker />
        </div>
      </div>
    </main>
  );
}
