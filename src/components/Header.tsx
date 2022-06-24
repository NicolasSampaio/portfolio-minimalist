import {
  Envelope,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
} from "phosphor-react";

export function Header() {
  return (
    <>
      <h1 className="text-3xl sm:text-5xl font-black">nicolassampaio.dev</h1>
      <dl>
        <dt className="text-xs font-bold uppercase mb-2">About me</dt>
        <dd className="text-sm max-w-lg">
          Nicolas Sampaio. Software Engineer based in Vitória - ES 🏖, Brazil.
          <br />
          <strong>Be better than yesterday.</strong> Majoring in Information
          Systems.
          <br />
          Backend: .NET, PostgreSQL, SQL Server, MySQL
          <br />
          Frontend: Html, Css, Javascript, Typescript, Vite, Tailwind, React,
          Angular
          <ul className="list-disc">
            <li>
              I love the feeling of learning something new, and especially of
              sharing.
            </li>
            <li>I love getting better at what I do</li>
            <li>I like to stream my self playing and coding</li>
            <li>Im the routine type guy</li>
            <li>Workout and read are a must on my life</li>
            <li>Softskills enthusiast.</li>
          </ul>
        </dd>
      </dl>

      <dl>
        <dt className="text-xs font-bold uppercase mb-2">Social Media</dt>
        <div className="flex">
          <dd>
            <a
              href="https://www.linkedin.com/in/nicolassampaio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={28} />
            </a>
          </dd>
          <dd>
            <a
              href="https://github.com/NicolasSampaio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={28} />
            </a>
          </dd>

          <dd>
            <a
              href="https://www.instagram.com/shizas.png/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={28} />
            </a>
          </dd>

          <dd>
            <a href="mailto: nicolas.pereira.sampaio16@gmail.com">
              <EnvelopeSimple size={28} />
            </a>
          </dd>
        </div>
      </dl>
    </>
  );
}
