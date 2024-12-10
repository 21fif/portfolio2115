type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-4 lg:px-6">
        
          <div className="flex flex-col  justify-center items-center">
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Made by Filip Rożniak
            </p>
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              21fif_
            </p>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;