import Image from 'next/image'
import TurkiyeFlag from '../public/flag-for-turkey_1f1f9-1f1f7.png'
import TextAnimation from "@/Components/TextAnimation";
import ReadingBook from "@/Components/ReadingBook";
import Link from "next/link";
import MainTitle from "@/Components/MainTitle";
import MiniTitle from "@/Components/MiniTitle";
import { getCurrentlyReadingBooks } from "@/utils/getBooks";

export default async function Home() {
  const currentlyReading = await getCurrentlyReadingBooks();

  return (
    <main className="container p-4 py-8 w-full h-full flex flex-col md:gap-0 gap-8">
      <div className="flex-1">
        <MainTitle>
          <span className="truncate">
            Hello, I&apos;m Akif. I&apos;m located in <span className="inline"> <Image src={TurkiyeFlag} className="inline md:w-20 md:h-20 h-9 w-9" alt="Flag of Turkiye" /> </span>
            <br />
            and interested in
          </span>
          <Link href="/resume" className="inline-grid place-items-center ml-1 md:ml-2 w-max">
            <TextAnimation />
          </Link>
        </MainTitle>
      </div>

      <div className="flex-1 mt-8 flex flex-col md:items-start items-center">
        <MiniTitle>
          What I&apos;m currently reading
        </MiniTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-x-8">
          {
            currentlyReading.map((book: any, key: any) =>
            (
              <ReadingBook key={key} title={book.book.title} readPercents={0} cover={book.book.cover} slug={book.book.slug} />
            )
            )
          }
        </div>
      </div>

    </main>
  )
}
