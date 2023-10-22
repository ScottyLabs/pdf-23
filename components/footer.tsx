import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-secondary-blue h-48 mt-48 flex items-center justify-center">
      <table className="text-white border-separate border-spacing-x-10 border-spacing-y-2">
        <tbody>
          <tr>
            <td>
              <h2 className="text-xl font-bold">Stay in touch with us!</h2>
            </td>
            <td>
              <Link
                href="https://scottylabs.org"
                className="text-lg hover:underline"
              >
                Website
              </Link>
            </td>
            <td>
              <Link
                href="https://www.instagram.com/cmu.scottylabs/"
                className="text-lg hover:underline"
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
                className="text-lg hover:underline"
              >
                Facebook
              </Link>
            </td>
            <td>
              <Link
                href="https://medium.com/tartanhacks"
                className="text-lg hover:underline"
              >
                Medium
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link
                href="https://scottylabs.slack.com/signup#/domain-signup"
                className="text-lg hover:underline"
              >
                Slack
              </Link>
            </td>
            <td>
              <Link
                href="mailto:cmu.scottylabs@gmail.com"
                className="text-lg hover:underline"
              >
                Email
              </Link>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center pt-4">
              Made with ❤️ by ScottyLabs
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
