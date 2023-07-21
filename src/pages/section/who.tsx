export default function Who() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center uppercase text-gray-900 lg:mb-16 dark:text-white md:text-4xl">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap md:gap-6 gap-8 justify-center items-center">
          <div className="rounded-lg shadow-md border shadow-sky-900 w-56 h-[300px] p-4 flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1a365d"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
                <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
              </svg>
            </div>
            <h1 className="font-bold text-sm text-center">Our Mission </h1>
            <p className="text-xs text-center">
              At our Coding Extracurricular Activity, our mission is to foster a
              passion for coding, promote technological literacy, and build
              character with a focus on problem-solving and collaboration.
            </p>
          </div>
          {/* items 2 */}
          <div className="rounded-lg shadow-md border shadow-sky-900  w-56  h-[300px] p-4 flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 640 512" fill="#1a365d" className="w-8 h-8">
                <path d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-79.7 12.31-129.8 79.34-131.9 82.24-7.844 10.69-5.531 25.72 5.125 33.57a23.858 23.858 0 0014.19 4.657c7.406 0 14.69-3.375 19.38-9.782.406-.563 40.19-53.91 100.5-63.23 7.457-.961 14.98.67 21.56 4.483L227.2 168.2c-12.4 12.3-20.1 27.9-20.1 46.3 0 17.5 6.812 33.94 19.16 46.29 13.24 12.41 29.64 18.31 47.14 18.31s33.94-6.813 46.31-19.19l11.35-11.35 124.2 100.9c2.312 1.875 2.656 5.251.5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719-1.656.156-4.562.125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6-9.469.813-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3H0v255.6l64 .04c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.438 13.62-1.406 26.41-6.063 37.47-13.5l.906.813c12.03 9.876 27.28 14.41 42.69 12.78 13.19-1.375 25.28-7.032 33.91-15.35 21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76 8.381-8.382c9.375-9.376 9.375-24.57 0-33.94-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8c-6.6 6.7-18.1 6.7-24.7 0-3.312-3.282-5.125-7.657-5.125-12.31 0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03 59.75 9.22 100.2 62.73 100.6 63.29 3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1l-133.9-1zM48 352c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.18 16 16.08c0 8.7-7.25 15.9-16 15.9zm544 0c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99c0 8.79-7.2 15.99-16 15.99z" />
              </svg>
            </div>
            <h1 className="font-bold text-sm text-center">
              Collaborative Projects{" "}
            </h1>
            <p className="text-xs text-center">
              Our Coding Extracurricular Activity emphasizes collaboration, with
              students working together on coding projects.
            </p>
          </div>
          {/* items 3 */}
          <div className="rounded-lg shadow-md border shadow-sky-900  w-56  h-[300px] p-4 flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 1024 1024" fill="#1a365d" className="w-8 h-8">
                <path d="M512 327c-29.9 0-58 11.6-79.2 32.8A111.6 111.6 0 00400 439c0 29.9 11.7 58 32.8 79.2A111.6 111.6 0 00512 551c29.9 0 58-11.7 79.2-32.8C612.4 497 624 468.9 624 439c0-29.9-11.6-58-32.8-79.2S541.9 327 512 327zm342.6-37.9a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 615c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
              </svg>
            </div>
            <h1 className="font-bold text-sm text-center">
              Inclusive Environment
            </h1>
            <p className="text-xs text-center">
              We foster an inclusive and supportive environment where students
              from diverse backgrounds and skill levels come together to learn
              and collaborate, fostering a strong sense of community.
            </p>
          </div>
          {/* items 3 */}
          <div className="rounded-lg shadow-md border shadow-sky-900 w-56  h-[300px] p-4 flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 900 1000" fill="#1a365d" className="w-8 h-8">
                <path d="M800 310c28 0 51.667 9.667 71 29s29 43 29 71v290c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 726.667 0 700V410c0-28 10-51.667 30-71s43.333-29 70-29h250V200l200 180-200 180V450H140v210h620V450H610V310h190" />
              </svg>
            </div>
            <h1 className="font-bold text-sm text-center">
              Continuous Learning and Adaptation
            </h1>
            <p className="text-xs text-center">
              We believe in the importance of continuous learning and adapting
              to the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
