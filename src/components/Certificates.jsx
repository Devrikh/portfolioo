import { certificates } from "./workContent";

export function Certificates() {
  return (
    <div className="w-full px-[80px] pt-[80px] pb-[160px] flex flex-col items-center">
      <div className="max-w-[1600px] w-full flex flex-col gap-[60px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <p className="font-medium text-[30px]">certifications.</p>
          <div className="bg-[#F5F5F5] px-[36px] py-[20px] font-medium text-[16px]">
            {certificates.length} credentials
          </div>
        </div>

        {/* Badge grid */}
        <div className="flex flex-row gap-[20px]">
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                w-[280px] h-[280px] flex-shrink-0
                border border-[#EAEAEA]
                p-[32px] flex flex-col justify-between
                hover:bg-black hover:border-black
                transition-all duration-200 ease-in-out
                cursor-grow
              "
            >
              {/* Top row — icon + external link icon */}
              <div className="flex justify-between items-start">
                <div className="w-[44px] h-[44px] bg-[#F5F5F5] group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  {cert.icon === "google" ? <GoogleIcon /> : <NvidiaIcon />}
                </div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-30 group-hover:opacity-60 transition-opacity duration-300 text-black group-hover:text-white mt-[2px]"
                >
                  <path
                    d="M1 10L10 1M10 1H4M10 1V7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Bottom — text */}
              <div className="flex flex-col gap-[6px]">
                <p className="text-[11px] font-medium text-gray-400 group-hover:text-gray-400 transition-colors duration-300 uppercase tracking-[0.08em]">
                  {cert.issuer}
                </p>
                <p className="text-[17px] font-medium leading-[1.25em] tracking-tight text-black group-hover:text-white transition-colors duration-300">
                  {cert.title}
                </p>
                <p className="text-[12px] text-gray-400 group-hover:text-gray-400 transition-colors duration-300 mt-[2px]">
                  {cert.level}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function NvidiaIcon() {
  return (
    <svg
      width="26"
      height="19"
      viewBox="0 0 220 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M82.9 37.6V22.5C84.9 22.3 87 22.2 89.1 22.2c38.5 0 63.9 33.1 63.9 33.1S126.4 93 96.1 93c-4.5 0-8.9-.7-13.2-2V52.3c17.4 2.1 20.9 9.9 31.4 27.4l23.3-19.6S121.4 34.4 82.9 37.6z"
        fill="#76B900"
      />
      <path
        d="M82.9 0v22.5c2-.2 4.1-.3 6.2-.3 53.8 0 89.3 49.3 89.3 49.3S139.9 128 89.1 128c-2.1 0-4.2-.1-6.2-.3V158h-1.3V0h1.3z"
        fill="#76B900"
      />
      <path d="M0 55.4v47.2l22.3 14.9V40.5L0 55.4z" fill="#76B900" />
      <path d="M22.3 40.5v77l26.3-17.6V58.1L22.3 40.5z" fill="#76B900" />
    </svg>
  );
}
