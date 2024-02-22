import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col justify-start p-32 min-h-full">
            <h1 className="text-4xl">Hi there!</h1>
            <p className="pt-10 text-base">Unfortunately, we could not find the page you were looking for.</p>
            <Link href="/">
                <div className="text-base p-2 my-8 w-36 text-center border-blue-900 border-2 rounded-full hover:bg-blue-900 hover:text-white transition:.3s hover:tracking-wider">return home</div>
            </Link>
        </div>
)}


/*
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  padding: 8rem;
  padding: 12% 15%;
  background-color: var(--bg-color);

  min-height: 100vh;
  font-family: var(--font-ebgaramond);
  background-color: var(--bg-color);
}

.message {
  padding-top: 40px;
  font-size: 15pt;
}

.button {
    font-size: 14pt;
    margin-top: 30px;
    width: 150px;
    padding: 10px;
    border-radius: 4rem;
    border: 2px solid var(--gray-green);
    text-align: center;
  }
  
  .button:hover {
    background-color: var(--gray-green);
    transition: .4s;
    letter-spacing: .4px;
  }
*/