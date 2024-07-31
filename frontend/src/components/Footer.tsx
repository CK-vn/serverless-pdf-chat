import { CloudIcon } from "@heroicons/react/24/outline";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 mt-auto">
      <footer className="container">
        <div className=" flex flex-row justify-between py-3 text-sm">
          <div className="inline-flex items-center">
            <CloudIcon className="w-5 h-5 mr-1.5" />
            Powered by Amazon Web Services
          </div>
          <div className="inline-flex items-center">
          <div className="inline-flex items-center hover:underline underline-offset-2">
          <a href="https://vn.linkedin.com/jobs/view/junior-intern-cloud-solution-architect-at-cloud-kinetics-vietnam-3981082984" className="hover:underline me-4 md:me-6">CKVN SA Team with ❤️</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
