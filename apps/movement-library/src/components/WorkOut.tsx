/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fgSlmtKSMKF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
import ProgressBar from "./ui/ProgressBars";

export default function WorkOut() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">movement library</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Horse Stance
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The perfect exercise for strengthening your core and improving
                  your posture.
                </p>
                <Image
                  alt="Horse stance exercise"
                  className="py-12"
                  height="1080"
                  src="/images/horse-stance.jpg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Instructional Video
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch this video to learn how to perform the Horse Stance
                  exercise correctly.
                </p>
                <div>
                  <video
                    width="600"
                    height="600"
                    muted
                    controls
                    preload="none"
                    poster="\images\yoga_at_desk_business.jpg"
                  >
                    <source src="/videos/simple_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="mx-auto aspect-video w-full max-w-sm overflow-hidden rounded-xl object-cover">
                <span className="h-full w-full rounded-md bg-muted object-cover" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Step-by-Step Instructions
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these instructions to perform the Horse Stance
                  exercise.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:gap-12">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Place your hands on your hips and bend your knees.
                    </p>
                  </div>
                  <div className="mx-auto aspect-video w-full max-w-sm overflow-hidden rounded-xl object-cover">
                    <span className="h-full w-full rounded-md bg-muted object-cover" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 2</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Lift your hips off the ground and straighten your legs.
                    </p>
                  </div>
                  <div className="mx-auto aspect-video w-full max-w-sm overflow-hidden rounded-xl object-cover">
                    <span className="h-full w-full rounded-md bg-muted object-cover" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Step 3</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Return to the starting position and repeat the exercise.
                    </p>
                  </div>
                  <div className="mx-auto aspect-video w-full max-w-sm overflow-hidden rounded-xl object-cover">
                    <span className="h-full w-full rounded-md bg-muted object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <ProgressBar progress1={50} progress2={75} progress3={25} />
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-2 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-2 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
