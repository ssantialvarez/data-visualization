import { Link } from "@tanstack/react-router";


const random_phrases = [
  'From failing, you learn. Success? Not so much.—Aunt Billie, Meet The Robinsons',
  'The nicest thing about the rain is that it stops eventually.—Eeyore, Winnie the Pooh',
  'If you focus on what you left behind, you will never be able to see what lies ahead.—Gusteau, Ratatouille',
  'Today is a good day to try.—Quasimodo, The Hunchback of Notre Dame',
  'Hakuna Matata.—Timon & Pumba, The Lion King',
  'Ohana means family. Family means nobody gets left behind or forgotten.—Lilo, Lilo & Stitch'
]

export default function Index() {
  let aux = random_phrases[getRandomInt(random_phrases.length)].split('—')
  const phrase = aux[0];
  aux = aux[1].split(",")
  const character = aux[0]
  const show = aux[1]

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-snow w-full max-w-lg p-8 opacity-90 rounded-xl shadow-lg text-center">
        <h1 className="text-6xl text-black font-bold mb-4">Welcome to Disney API</h1>
        <p className="text-xl italic text-black font-bold mb-6">
          Where dreams come true!
          <br/>
          "{phrase}"
        </p>
        <div className="text-xl text-black font-bold mb-6">
          {character},{show}
        </div>

        <Link
          to="/characters"
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg opacity-100 hover:bg-yellow-300 transition"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}