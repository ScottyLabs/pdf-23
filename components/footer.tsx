import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-secondary-blue h-48 mt-48 flex items-center justify-center text-sm md:text-base">
      <table className="text-white border-separate border-spacing-x-4 md:border-spacing-x-10 border-spacing-y-2">
        <tbody>
          <tr>
            <td>
              <h2 className="text-base md:text-xl font-bold">
                Stay in touch with us!
              </h2>
            </td>
            <td>
              <Link href="https://scottylabs.org" className="hover:underline">
                Website
              </Link>
            </td>
            <td>
              <Link
                href="https://www.instagram.com/cmu.scottylabs/"
                className="hover:underline"
              >
                Instagram
              </Link>
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <Image
                src="/scottylabs.svg"
                width={50}
                height={50}
                alt="Scottylabs Logo"
                className="ml-auto"
              ></Image>
            </td>
            <td>
              <Link
                href="https://www.facebook.com/ScottyLabs/"
                className="hover:underline"
              >
                Facebook
              </Link>
            </td>
            <td>
              <Link
                href="https://medium.com/tartanhacks"
                className="hover:underline"
              >
                Medium
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link
                href="https://scottylabs.slack.com/signup#/domain-signup"
                className="hover:underline"
              >
                Slack
              </Link>
            </td>
            <td>
              <Link
                href="mailto:cmu.scottylabs@gmail.com"
                className="hover:underline"
              >
                Email
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center pt-4 font-thin">
              Made with ❤️ by ScottyLabs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
